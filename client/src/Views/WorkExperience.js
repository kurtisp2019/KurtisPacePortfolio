/**
 * 
 *      WorkExperience.js 
 * 
 */

import React from "react";
import "../styles/mainLayout.css";
import "../styles/workExperience.css";

function WorkExperience() {

    // Work title
    // job title
    // description

    return (
        <>
            <div className="mainContent workExpBackgroundColor">
                <p className="title">Work Experience</p>
                <hr className="mainContentDivider"></hr>

                <img style={{ paddingTop: "25px" }} src={require("../resources/images/getWebEdge.png")} alt="" />
                <p className="jobTitle">Get Web Edge</p>
                <p className="jobPosition">ASP.NET Internship</p>
                <p className="jobDates">October 2011 - February 2012</p>
                <hr className="jobTitleDiv"></hr>
                <p className="jobDesc">
                    During this internship I learned how to build websites using C# and ASP.NET.  I led a team of 4 people on a project called
                    "Garage Sale Blitzer" that allowed users to post and search for local garage sales in their area.  I was also responsible for
                    ghosting all of our computers at the end of the day with fresh copies of Windows and MS SQL 2008.

                </p>
            </div>

        </>);
}

export default WorkExperience;