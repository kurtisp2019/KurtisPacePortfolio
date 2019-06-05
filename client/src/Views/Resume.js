/**
 * 
 *      Resume.js 
 * 
 */

import React from "react"

function Resume() {
    
    return (
        <div style={{ textAlign: "center", color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingBottom: "50px", paddingTop: "40px", backgroundColor: "smokewhite" }}>
        <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "45px" }}>Resume</p>
        <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px" }}></hr>

            <object data={require("../resources/images/kurtis-pace-resume-2019.pdf")} type="application/pdf" width="400px" height="1100px">resume link</object>
        </div>
    );
}

export default Resume;