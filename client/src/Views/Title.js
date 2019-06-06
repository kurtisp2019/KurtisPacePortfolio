/**
 * 
 *      
 *      Title.js 
 * 
 */

import React from "react"
 
function Title() { 
    return (
        <>
            <div style={{ paddingLeft: "5vw", paddingRight: "5vw", fontFamily: "'Montserrat', sans-serif", paddingTop: "25px", paddingBottom: "25px", lineHeight: "1.5", textAlign: "center", backgroundColor: "#2096f3" }}>
            <img style={{ border: "1px solid white", width: "240px", height: "320px", marginBottom: "25px"}} src={require("../resources/images/kp-profile-pic.jpg")} alt="temp pic"></img>
                <p style={{ fontSize: "45px", color: "white" }}>Kurtis Pace</p>
                <hr style={{backgroundColor: "white", borderWidth: 3, width: "170px"}}></hr>
                <p style={{ fontSize: "25px", color: "white" }}>Junior Web and Game Developer</p>
                <p style={{fontSize: "25px", color: "white"}}>904-571-8681</p>
                <p style={{ fontSize: "25px", color: "white" }}>kurtis.pace2011@gmail.com</p>
                <p style={{ fontSize: "25px" }}><a style={{ color: "white" }} href="https://www.linkedin.com/in/kurtis-pace-822a86154/">https://www.linkedin.com/in/kurtis-pace-822a86154/</a></p>
            </div>
        </>
    );
}
//

export default Title;