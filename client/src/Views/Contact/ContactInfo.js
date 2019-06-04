/**
 * 
 *      Contact.js 
 * 
 */

import React from "react"
// style={{}}
function ContactInfo() {

    return (
        <>
            <div style={{ fontFamily: "'Montserrat', sans-serif", paddingBottom: "25px", lineHeight: "1.5", textAlign: "center" }}>
                <p style={{fontSize: "45px"}}>Kurtis Pace</p>
                <p style={{fontSize: "25px"}}>904-571-8681</p>
                <p style={{ fontSize: "25px" }}><a style={{ color: "blue" }} href="https://www.linkedin.com/in/kurtis-pace-822a86154/">https://www.linkedin.com/in/kurtis-pace-822a86154/</a></p>
                <p style={{ fontSize: "25px" }}>kurtis.pace2011@gmail.com</p>
            </div>
        </>
    );
};

export default ContactInfo;