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
        <Container fluid className="home d-flex flex-column justify-content-center align-items-center mb-1"
            style={
                {
                    height: header,
                }
            }
        > 
            <div className="message-container mb-4">
                <div className="display-2" id="myName">Hi, I'm Josh.</div>
                <div className="h1">I'm a full stack web developer.</div>
                <button className="h2 view-work">Check Me Out &#8615;</button>
            </div>
            
        </Container>
    )
}

export default Home;