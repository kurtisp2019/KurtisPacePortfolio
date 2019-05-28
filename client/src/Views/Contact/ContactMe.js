/**
 * 
 *      
 *      ContactMe.js 
 * 
 */

import React from "react"

function ContactMe() {
    return (
        <div style={{ color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingTop: "25px", paddingBottom: "25px", textAlign: "center", backgroundColor: "lightblue" }}>
            <p style={{ textDecoration: "underline", fontSize: "45px"}}>Contact Me</p>
           
            <form >
                <div style={{ paddingTop: "25px" }}>
                    <p>Title: </p>
                    <input type="text"></input>
                </div>
                <br></br>
                <div>
                    <p>Message: </p>
                    <textarea></textarea>
                </div>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;