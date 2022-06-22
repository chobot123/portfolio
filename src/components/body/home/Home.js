import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import RollingBot from "./rolling_bot/RollingBot";
import "./hallway.css";

function Home(){

    const [homeHeight, setHomeHeight] = useState(0);
    const [xCoordinate, setXCoordinate] = useState(0);

    function getHomeHeight(){
        const headerHeight = document.querySelector(".header").offsetHeight;
        const bodyHeight = document.body.offsetHeight;
        return bodyHeight - headerHeight;
    }

    useEffect(()=>{
        setHomeHeight(getHomeHeight());
    }, [homeHeight])

    return(
        <Container 
            fluid className="home d-flex 
                    flex-column justify-content-center 
                    align-items-start"

            style={
                {
                    height: homeHeight,
                }
            }
        > 
            <div className="message-container mb-5 pb-5">
                <div className="display-2" id="myName">Hi, I'm Josh.</div>
                <div className="h1">I'm a full stack web developer.</div>
                <button className="h2 view-work">Check Me Out &#8615;</button>
            </div>
            <div className="hallway" style={{height: homeHeight}}>
                <div className="top lights">
                    <div className="lights container">
                        <div className="left">
                            <div className="lights"></div>
                        </div>
                        <div className="right">
                            <div className="lights"></div>
                        </div>
                    </div>
                </div>
                <div className="left doors"></div>
                <div className="middle endOfHall"></div>
                <div className="right doors"></div>
                <div className="bottom hall">
                    <div className="hall container">    
                        <div className="left">
                            <div className="hall"></div>
                        </div>
                        <div className="right">
                            <div className="hall"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home;