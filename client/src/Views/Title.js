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
            <div style={{ fontFamily: "'Montserrat', sans-serif", paddingTop: "25px", paddingBottom: "25px", lineHeight: "1.5", textAlign: "center", backgroundColor: "lightblue" }}>
            <img style={{ border: "1px solid black", width: "240px", height: "320px", marginBottom: "25px"}} src={require("../resources/images/temp-profilepic.jpg")} alt="temp pic"></img>
                <p style={{ fontSize: "45px" }}>Kurtis Pace</p>
                <p style={{ fontSize: "25px", color: "black" }}>Junior Web and Game Developer</p>
                <p style={{fontSize: "25px", color: "black"}}>904-571-8681</p>
                <p style={{ fontSize: "25px", color: "blue" }}>kurtis.pace2011@gmail.com</p>
            </div>
        </>
    );
}
//

export default Title;