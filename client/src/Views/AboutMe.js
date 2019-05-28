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
            <div style={{ fontFamily: "'Montserrat', sans-serif", textAlign: "center", backgroundColor: "lightyellow" }}>
            <p style={{ textDecoration: "underline", paddingBottom: "25px", paddingTop: "60px", fontSize: "45px", fontWeight: "bold" }}> About Me</p>
                <p style={{ paddingBottom: "25px", lineHeight: "1.5", fontSize: "22px", marginLeft: "5vw", marginRight: "5vw" }}>I started developing 11 years ago,
                 I graduated from Full Sail University in Orlando Florida in 2011 with a 
                 <span style={{ fontSize: "26px", fontWeight: "bold" }}> bachelors in computer science</span> specifically for 
                 <span style={{ fontSize: "26px", fontWeight: "bold" }}> Game Development.</span>  The program was
                    <span style={{ fontSize: "26px", fontWeight: "bold" }}> C++ </span> 
                        and <span style={{ fontSize: "26px", fontWeight: "bold" }}>C#</span> based but I also learned other languages and scripting 
                languages like <span style={{ fontSize: "26px", fontWeight: "bold" }}> Asembly x86, XML, HLSL, and GLSL. </span> 
                <br></br>    
                <br></br>    
                    Afterwards I had an 4 month web development internship with a company called GetWebEdge where I learned some
                <span style={{ fontSize: "26px", fontWeight: "bold" }}> ASP.NET </span> based web dev.  
                    
                <br></br>    
                    <br></br>
                Recently as of May 2019 I completed a coding bootcamp 
                    at Denver University for fullstack development using <span style={{ fontSize: "26px", fontWeight: "bold" }}>Javascript</span> and learned 
                    technologies like <span style={{ fontSize: "26px", fontWeight: "bold" }}> Node, Express, MySQL, MongoDB, Sequelize, Mongoose, and React.</span>  </p>
            </div>
        </>
    );
}

export default AddClientWidthAndHeight(AboutMe);
