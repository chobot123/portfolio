import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import Description from "./description";

function Home(props){

    const numOfBubbles = 4;

    const setBubbleSizeAndPosition = (bubbleElement) => {
        const pos = Math.floor(Math.random() * (101));
        const size = Math.floor(Math.random() * (9 - 1) + 1);
        
        bubbleElement.style.left= `${pos}%`;
        bubbleElement.style.bottom = "-20%";
        bubbleElement.style.width = `${size}%`;
    }

    const createAnim = (bubbleElement) => {
        const riseTimer = Math.floor(Math.random() * (15 - 7) + 7);
        const swayTimer = Math.floor(Math.random() * (5 - 2) + 2);
        const directionType = Math.floor(Math.random() * 2);

        bubbleElement.style.webkitAnimation = `rise ${riseTimer}s linear infinite,
                                sway ${swayTimer}s ease-in-out infinite ${(directionType === 0) ? "alternate" : "alternate-reverse"}`;
    }

    const bubbleAnim = (bubble) => {
        setBubbleSizeAndPosition(bubble);
        createAnim(bubble);
        bubble.addEventListener("animationiteration", (animation) => {
            if(animation.animationName === "rise"){
                bubble.style.animationName = "none";
                setBubbleSizeAndPosition(bubble);
                setTimeout(() => {createAnim(bubble)}, 2000);
            }

        }, false)
    }

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
                    height: props.homeHeight,
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
            <Container className="bubble-container" style={{height: props.homeHeight}}>
                <div className="bubbles">
                    {[...Array(numOfBubbles)].map((elem, index) => 
                        <div className="bubble" id="bubble-two" key={index}>
                            <span className="air"></span>
                        </div>
                    )}
                </div>
            </Container>           
        </Container>
    )
}

export default Home;