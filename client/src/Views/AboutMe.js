/**
 * 
 *      AboutMe.js
 * 
 */

import React from "react";
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight";
import "../styles/mainLayout.css";
import "../styles/aboutMe.css";

function AboutMe() {

    return (
        <>
            <div className="mainContent aboutMeBackgroundColor">
                <p className="title">About Me</p>
                <hr className="mainContentDivider"></hr>

                <p className="aboutMeContent">I started developing 11 years ago, I graduated from Full Sail University in Orlando Florida in 2011 with a
                 <span className="keyWord"> bachelors in computer science</span> specifically for <span className="keyWord"> Game Development.</span>  The program was
                    <span className="keyWord"> C++ </span> and <span className="keyWord">C#</span> based but I also learned other languages and scripting
                languages like <span className="keyWord"> Assembly x86, XML, HLSL, and GLSL. </span>
                    <br></br>
                    <br></br>
                    Afterwards, I had a 4-month web development internship with a company called GetWebEdge where I learned some<span className="keyWord"> ASP.NET </span> based web dev.
                    <br></br>
                    <br></br>
                    Recently as of May 2019, I completed a coding bootcamp at Denver University for full stack development using <span className="keyWord">JavaScript</span> and learned
                    technologies like <span className="keyWord"> Node, Express, MySQL, MongoDB, Sequelize, Mongoose, and React.</span>  </p>
            </div>
        </>
    );
}

export default AddClientWidthAndHeight(AboutMe);
