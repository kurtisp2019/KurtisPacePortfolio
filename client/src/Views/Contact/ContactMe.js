/**
 * 
 *      
 *      ContactMe.js 
 * 
 */

import React from "react";
import "../../styles/mainLayout.css";
import "../../styles/contact/contactMe.css";

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
        <div className="mainContent contactMeBackgroundColor">
            <p className="title">Contact</p>
            <hr className="mainContentDivider"></hr>

            <div style={{textAlign: "left"}}>
                <form id="form-contact" method="POST" >
                    <p style={{ paddingTop: "25px" }}>Subject: </p>
                    <input id="input-subject" className="contactMeInput" type="text"></input>

                    <p style={{ paddingTop: "25px" }}>CC: </p>
                    <input id="input-cc" className="contactMeInput"type="text"></input>

                    <p style={{ paddingTop: "25px"}}>Body: </p>
                    <textarea id="input-body" className="contactMeTextArea" ></textarea>

                    <button onClick={sendEmail} className="contactMeBtn" >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;