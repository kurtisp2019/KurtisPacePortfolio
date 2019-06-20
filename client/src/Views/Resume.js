/**
 * 
 *      Resume.js 
 * 
 */

import React from "react";
import "../styles/mainLayout.css";
import "../styles/resume.css";
import Button from 'react-bootstrap/Button'

function Resume() {

    return (
        <div className="mainContent resumeBackgroundColor">
            <p className="title">Resume</p>
            <hr className="mainContentDivider"></hr>
            {/* <Button onClick = {goToResume} style={{ fontSize: "20px", marginBottom: "25px"}} variant="success">Link to Resume -></Button> */}
            <Button
                href={require("../resources/images/kurtis-pace-resume-2019.pdf")}
                style={{ fontSize: "20px", marginBottom: "25px" }}
                variant="success"
                download="Kurtis-Pace-Resume.pdf">
                Download Resume
                </Button>

            {/* <a href="/images/myw3schoolsimage.jpg" download="w3logo">Download Resume</a> */}
            <div>
                <object className="resumePDF" data={require("../resources/images/kurtis-pace-resume-2019.pdf")} type="application/pdf">
                    <p style={{ height: "100vh" }}>PDF not able to load, please use the link to view my resume.</p>
                </object>
            </div>
        </div>
    );
}

export default Resume;