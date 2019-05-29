/**
 * 
 *      
 *      ContactMe.js 
 * 
 */

import React from "react"


function sendEmail(_e) {


    var subject = document.getElementById("input-subject");
    var cc = document.getElementById("input-cc");
    var body = document.getElementById("input-body");
    var form = document.getElementById("form-contact");

    console.log(body.value);

    
    form.setAttribute("action", `mailto:kurtis.pace2011@gmail.com?body=${body.value}&subject=${subject.value}&cc=${cc.value}`);
    form.submit();
}

function ContactMe() {
    return (
        <div style={{ color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingTop: "40px", paddingBottom: "25px", backgroundColor: "white" }}>
            <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "45px"}}>Contact Me</p>
            <hr style={{  marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px"}}></hr>
           
            <form id="form-contact"  method = "POST" style={{ marginLeft: "5vw", marginRight: "5vw" }}>
                <div style={{ paddingTop: "25px" }}>
                    <p>Subject: </p>
                    <input id ="input-subject" style={{ marginTop: "5px", height: "50px", width: "100%"}} type="text"></input>
                </div>
                <div style={{ paddingTop: "25px" }}>
                    <p>CC: </p>
                    <input id ="input-cc" style={{ marginTop: "5px", height: "50px", width: "100%"}} type="text"></input>
                </div>
                <div style={{ paddingTop: "25px" }}>
                    <p>Body: </p>
                    <textarea id ="input-body" style={{ marginTop: "5px", width: "100%", height: "200px"}} ></textarea>
                </div>
                <br></br>
                <button onClick = {sendEmail} style={{ marginBottom: "25px", width: "200px", height: "50px", color: "white", backgroundColor: "#2096f3" }} >Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;