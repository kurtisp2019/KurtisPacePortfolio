/**
 * 
 *      Resume.js 
 * 
 */

import React from "react";
import "../styles/mainLayout.css";
import "../styles/resume.css";
import  Button  from 'react-bootstrap/Button'

function goToResume() {

    document.location.href = "https://github.com/kurtisp2019/Resume-2019/blob/master/Kurtis.Pace.Resume.2019.pdf";
}

function Resume() {

    return (
        <div className="mainContent resumeBackgroundColor">
            <p className="title">Resume</p>
            <hr className="mainContentDivider"></hr>

            <Button onClick = {goToResume} style={{ fontSize: "20px", marginBottom: "25px"}} variant="success">Link to Resume -></Button>
            
            <object className="resumePDF" data={require("../resources/images/kurtis-pace-resume-2019.pdf")} type="application/pdf">
            <p>PDF not able to load, please use the link to view my resume.</p>
            </object>

        </div>
    );
}

export default Resume;