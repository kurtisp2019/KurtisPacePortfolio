/**
 * 
 *      Resume.js 
 * 
 */

import React from "react";
import "../styles/mainLayout.css";
import "../styles/resume.css";

function Resume() {
    
    return (
        <div className="mainContent resumeBackgroundColor">
       
            <p className="title">Resume</p>
        <hr className="mainContentDivider"></hr>

            <object className= "resumePDF" data={require("../resources/images/kurtis-pace-resume-2019.pdf")} type="application/pdf">
                <a className="pdfLink" href= "https://github.com/kurtisp2019/Resume-2019/blob/master/Kurtis.Pace.Resume.2019.pdf">Link to Resume -></a>
            </object>
            
       </div>
    );
}

export default Resume;