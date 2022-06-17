import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

function Home(){

    const [header, setHeader] = useState(0);

    function getHomeHeight(){
        const headerHeight = document.querySelector(".header").offsetHeight;
        const bodyHeight = document.body.offsetHeight;
        return bodyHeight - headerHeight;
    }

    useEffect(()=>{
        //on component mount
        setHeader(getHomeHeight());
    }, [header])


    return(
        <Container fluid className="home d-flex flex-column justify-content-center align-items-start"
            style={
                {
                    height: header,
                }
            }
        > 
            <div className="message-container mb-5 pb-5">
                <div className="display-2" id="myName">Hi, I'm Josh.</div>
                <div className="h1">I'm a full stack web developer.</div>
                <button className="h2 view-work">Check Me Out &#8615;</button>
            </div>
            <div className="bot">
                <div className="rolling-droid">
                    <div className="head">
                        <div className="neck"></div>
                        <div className="head-marking"></div>
                        <div className="antenna"></div>
                        <div className="antenna-two"></div>
                        <div className="eyes"></div>
                        <div className="markings">
                            <div className="marking"></div>
                            <div className="marking"></div>
                            <div className="marking"></div>
                        </div>
                        <div className="camera">
                            <div className="camera-button"></div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="core">
                            <div className="inner-core">
                                <div className="bracket top"></div>
                                <div className="bracket left"></div>
                                <div className="bracket bot"></div>
                                <div className="bracket right"></div>
                                <div className="battery"></div>
                            </div>
                            <div className="left-core"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home;