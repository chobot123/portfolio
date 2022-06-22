import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import './RollingBot.css';

function RollingBot(props) {

    const [radius, setRadius] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [pixelsToMove, setPixelsToMove] = useState(0);

    function getRadius() {
        const droidBody = document.querySelector(".rolling-droid").childNodes[1];
        return Math.floor(droidBody.offsetWidth / 2);
    }

    //set radius after initial render
    useEffect(()=> {
        setRadius(getRadius());
    }, []);

    return (
            <animated.div className="rolling-droid">
                <div className="head">
                    <div className="neck"></div>
                    <div className="head-marking one"></div>
                    <div className="head-marking two"></div>
                    <div className="head-marking three"></div>
                    <div className="antenna"></div>
                    <div className="antenna-two"></div>
                    <div className="eyes">
                        <div className="pupil"></div>
                    </div>
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
                    <div className="screws left">
                        <div className="screw one"></div>
                        <div className="screw two"></div>
                    </div>
                    <div className="screws top">
                        <div className="screw one"></div>
                        <div className="screw two"></div>
                    </div>
                    <div className="screws right">
                        <div className="screw one"></div>
                        <div className="screw two"></div>
                    </div>
                    <div className="screws bottom">
                        <div className="screw one"></div>
                        <div className="screw two"></div>
                    </div>
                    <div className="core">
                        <div className="inner-core">
                            <div className="bracket top"></div>
                            <div className="bracket left"></div>
                            <div className="bracket bot"></div>
                            <div className="bracket right"></div>
                            <div className="battery"></div>
                        </div>
                    </div>
                    <div className="connector left"></div>
                    <div className="outer-core left">
                        <div className="inner-circle left">
                            <div className="bracket right"></div>
                        </div>
                    </div>
                    <div className="connector top"></div>
                    <div className="outer-core top">
                        <div className="inner-circle top">
                            <div className="bracket bottom"></div>
                        </div>
                    </div>
                    <div className="connector right"></div>
                    <div className="outer-core right">
                        <div className="inner-circle right">
                            <div className="bracket left"></div>
                        </div>
                    </div>
                    <div className="connector bottom"></div>
                    <div className="outer-core bottom">
                        <div className="inner-circle bottom">
                            <div className="bracket top"></div>
                        </div>
                    </div>
                </div>
            </animated.div>
    )
}

export default RollingBot;