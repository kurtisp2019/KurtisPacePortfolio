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
            <div style={{ textAlign: "center", backgroundColor: "lightblue" }}>
            <p style={{ textDecoration: "underline", paddingBottom: "25px", paddingTop: "60px", fontSize: "45px", fontWeight: "bold" }}> About Me</p>
            <img style={{width: "240px", height: "320px", paddingBottom: "25px"}} src={require("../resources/images/temp-profilepic.jpg")} alt="temp pic"></img>
                <p style={{ paddingBottom: "25px", lineHeight: "1.5", fontSize: "22px", marginLeft: "5vw", marginRight: "5vw" }}>I started developing 11 years ago,
                 I graduated from Full Sail University in Orlando Florida in 2011 with a bachelors in computer science specifically for Game Development.  The program was
                    <span style={{ fontSize: "26px", fontWeight: "bold" }}> C++ </span> 
                        and <span style={{ fontSize: "26px", fontWeight: "bold" }}>C#</span> based but I also learned other languages and scripting 
                languages like <span style={{ fontSize: "26px", fontWeight: "bold" }}> Asembly x86, XML, HLSL, and GLSL. </span>  
                    Afterwards I had an 4 month web development internship with a company called GetWebEdge where I learned some
                <span style={{ fontSize: "26px", fontWeight: "bold" }}> ASP.NET </span> based web dev.  Recently as of May 2019 I completed a coding bootcamp 
                    at Denver University for fullstack development using <span style={{ fontSize: "26px", fontWeight: "bold" }}>Javascript</span> and learned 
                    technologies like <span style={{ fontSize: "26px", fontWeight: "bold" }}> Node, Express, MySQL, MongoDB, Sequelize, Mongoose, and React.</span>  </p>
            </div>
        </>
    );
}

export default AddClientWidthAndHeight(AboutMe);
