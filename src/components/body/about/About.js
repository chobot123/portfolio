import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import helmet from "./diving.webp";

function About(props) {

    return (
        <Container fluid className="about" style={{height: props.aboutHeight}}>
            <Row>
                <Col className="display-1">About</Col>
            </Row>
            <Row>
                <Col>
                    <img id="helmet" src={helmet} alt="diving mask icon" />
                    <p className="about-me">
                        Disgruntled with the prospect of crunching numbers for the rest of my life,
                        I began searching for new opportunities and landed on the beautiful world of web development.
                        My journey began with The Odin Project - a free online full-stack curriculum 
                        emphasizing programming fundamentals and problem solving. Since I began the curriculum,
                        I have been living and breathing programming. The unique amalgam of creativity, logic,
                        and problem-solving continues to drive my passion and excitement for web development. From fast and 
                        easy-to-use UIs to organized APIs, be at ease as we make something truly beautiful together.
                    </p>
                </Col>
                <Col>Javascript, CSS, HTML, REACT, NODE, GIT, EXPRESS, MONGOOSE, MONGODB, WEBPACK, JEST, BOOTSTRAP</Col>
            </Row>
        </Container>
    )
}

export default About;