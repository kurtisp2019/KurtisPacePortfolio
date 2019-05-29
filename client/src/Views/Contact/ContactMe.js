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
           
            <form style={{ marginLeft: "5vw", marginRight: "5vw" }}>
                <div style={{ paddingTop: "25px" }}>
                    <p  >Title: </p>
                    <input style={{ marginTop: "5px", height: "50px", width: "100%"}} type="text"></input>
                </div>
                <div style={{ paddingTop: "25px" }}>
                    <p>Email: </p>
                    <input style={{ marginTop: "5px", height: "50px", width: "100%"}} type="text"></input>
                </div>
                <div style={{ paddingTop: "25px" }}>
                    <p>Message: </p>
                    <textarea style={{ marginTop: "5px", width: "100%", height: "200px"}} ></textarea>
                </div>
                <br></br>
                <button style={{ marginBottom: "25px", width: "200px", height: "50px", color: "white", backgroundColor: "#2096f3" }} >Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;