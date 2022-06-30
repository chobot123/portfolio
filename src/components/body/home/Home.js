import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import Description from "./description";

function Home(){

    const [homeHeight, setHomeHeight] = useState(0);

    const getHomeHeight = () => {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const bodyHeight = document.body.offsetHeight;
        return bodyHeight - headerHeight;
    }

    const setPosition = (bubbleElement) => {
        const pos = Math.floor(Math.random() * (91 - 1) + 1);
        bubbleElement.style.left= `${pos}%`;
        bubbleElement.style.bottom = "-20%";
    }

    const createAnim = (bubbleElement) => {
        const riseTimer = Math.floor(Math.random() * (15 - 7) + 7);
        const swayTimer = Math.floor(Math.random() * (5 - 2) + 2);
        const directionType = Math.floor(Math.random() * 2);
        bubbleElement.style.webkitAnimation = `rise ${riseTimer}s linear infinite,
                                sway ${swayTimer}s ease-in-out infinite ${(directionType === 0) ? "alternate" : "alternate-reverse"}`;
    }

    const updateAnim = (bubbleElement) => {
        const riseTimer = Math.floor(Math.random() * (15 - 7) + 7);
        const swayTimer = Math.floor(Math.random() * (5 - 2) + 2);
        const directionType = Math.floor(Math.random() * 2);
        bubbleElement.style.animationName = "rise, sway";
        bubbleElement.style.animationDuration = `${riseTimer}s, ${swayTimer}s`;
        bubbleElement.style.animationDirection = `normal, ${(directionType === 0) ? "alternate" : "alternate-reverse"}`;
    }

    const bubbleAnim = (bubble) => {
        setPosition(bubble);
        createAnim(bubble);
        bubble.addEventListener("animationiteration", (animation) => {
            if(animation.animationName === "rise"){
                bubble.style.animationName = "none";
                setPosition(bubble);
                setTimeout(() => {updateAnim(bubble)}, 2000);
            }

        }, false)
    }

    useEffect(()=>{
        setHomeHeight(getHomeHeight());
    }, [homeHeight])

    useEffect(() => {
        const colChildren = document.getElementsByClassName("bubbles")[0].childNodes;

        for(let i = 0; i < colChildren.length; i++){
            bubbleAnim(colChildren[i]);
        }
    }, [])

    return(
        <Container 
            fluid className="home d-flex 
                    flex-column justify-content-center 
                    align-items-center"

            style={
                {
                    height: homeHeight,
                }
            }
        >
            <Container className="message-container mb-5 pb-5">
                <div className="introduction h5 pb-5 d-flex justify-content-center align-items-center flex-column">
                    <div className="name-container">
                        <h1 className="my-name display-1">Joshua Cho</h1>
                        <h1 className="my-name display-1">Joshua Cho</h1>
                    </div>
                    <Description />
                </div>
            </Container>
            <Row className="bubble-container" style={{height: homeHeight}}>
                <Col className="bubbles">
                    <div className="bubble" id="bubble-one">
                        <span className="air"></span>
                    </div>
                    {/* <div className="bubble" id="bubble-two">
                        <span className="air"></span>
                    </div>
                    <div className="bubble" id="bubble-three">
                        <span className="air"></span>
                    </div> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;