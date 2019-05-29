/**
 * 
 *      
 *      ContactMe.js 
 * 
 */

import React from "react"

function ContactMe() {
    return (
        <div style={{ color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingTop: "40px", paddingBottom: "25px", backgroundColor: "white" }}>
            <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "45px"}}>Contact Me</p>
            <hr style={{  marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px"}}></hr>
           
            <form >
                <div style={{ paddingTop: "25px" }}>
                    <p>Title: </p>
                    <input type="text"></input>
                </div>
                <div style={{ paddingTop: "25px" }}>
                    <p>Email: </p>
                    <input type="text"></input>
                </div>
                <div style={{ paddingTop: "25px" }}>
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