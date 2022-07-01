import React from "react";
import './description.css';
import TypeWriterEffect from "react-typewriter-effect";

function Description(){
   
    return (
        <h2 className="description">
            <TypeWriterEffect
                startDelay={100}
                text="Web Developer"
                typeSpeed={200}
                cursorColor={"white"}
            />
        </h2>
    )
}

export default Description;