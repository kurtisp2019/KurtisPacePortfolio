/**
 * 
 *      AboutMe.js
 * 
 */

import React from "react"
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight"

function AboutMe() { 

    return(
        <>
            <div style={{ backgroundColor: "lightblue" }}>
            <p style={{ paddingBottom: "25px", paddingTop: "60px", fontSize: "45px", textAlign: "center"}}> About Me</p>
            <p style={{ paddingBottom: "25px", lineHeight: "1.5", fontSize: "22px", marginLeft: "5vw", marginRight: "5vw" }}>I absolutlely LOVE development of all kinds, I graduated from Full Sail University in Orlando Florida in 2011 with a
                        bachelors in computer science specifically for Game Development.  The program was C++ and C# based but I also learned other languages and scripting 
                        languages like Asembly x86, XML, HLSL, and GLSL.  Afterwards I had an 4 month web development internship with 
                        a company called GetWebEdge where I learned some ASP.NET based web dev.  Recently as of May 2019 I completed a coding bootcamp at Denver
                         University for fullstack development using javascript and learned technologies like Node, Express, MySQL,
                     MongoDB, Sequelize, Mongoose, and React.  </p>
            </div>
        </>
    );
}

export default AddClientWidthAndHeight(AboutMe);
