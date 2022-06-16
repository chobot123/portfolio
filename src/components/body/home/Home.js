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
        <Container fluid className="home"
            style={
                {
                    height: header,
                }
            }
        >
            <Row className="h-100 align-items-center">
                <Col>
                    <Container>
                        <div id="name">Hey, I'm Joshua</div>
                        <div id="greeting">I'm a Full-Stack Web Developer</div>
                    </Container>
                </Col>
                <Col className="h-100">
                    <Container className="h-100">
                        <div id="planet-container" className="h-100">
                            <div className="orbit" id="exp">
                                <div className="wrapper">
                                    <div className="planet" id="exp">Experience</div>
                                </div>
                            </div>
                            <div className="orbit" id="project">
                                <div className="wrapper">
                                    <div className="planet" id="project">Project</div>
                                </div>
                            </div>
                            <div className="orbit" id="about">
                                <div className="wrapper">
                                    <div className="planet" id="about">about</div>
                                </div>
                            </div>
                            <div className="orbit" id="contact">
                                <div className="wrapper">
                                    <div className="planet" id="contact">contact</div>
                                </div>
                            </div>
                            <div className="sun">Sun</div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;