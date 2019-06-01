/**
 * 
 *      WorkExperience.js 
 * 
 */

import React from "react"

function WorkExperience() { 

    // Work title
    // job title
    // description

    return (
        <>
              <div style={{ textAlign: "center", color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingTop: "40px", backgroundColor: "lightgreen" }}>
                    <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "45px" }}>Work Experience</p>
                    <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px" }}></hr>
                   
                <img style={{paddingTop: "25px"}} src = {require("../resources/images/getWebEdge.png")} alt = "" />
                <p style={{fontWeight: "bold", fontSize: "30px", paddingTop: "25px"}}>Get Web Edge</p>
                <p style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "10px" }}>ASP.NET Internship</p>
                <p style={{ fontWeight: "bold", fontSize: "20px", paddingTop: "10px" }}>October 2011 - February 2012</p>
                <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "100px" }}></hr>
                <p style={{ marginLeft: "5vw", marginRight: "5vw", paddingTop: "25px", fontSize: "25px", paddingBottom: "25px" }}>
                    During this internship I learned how to build websites using C# and ASP.NET.  I lead a team of 3 people on a project called 
                    "Garage Sale Blitzer" that allowed users to post and search for local garage sales in their area.  I was also responsible for
                    ghosting all of our computers at the end of the day with fresh copies of Windows and MS SQL 2008.  

                </p>
                
                
            </div>

        </>);
}

export default WorkExperience;