/**
 * 
 *      Contact.js 
 * 
 */

import React, { Component } from "react"
import AddClientWidthAndHeight from "../../Higher Order Components/AddClientWidthAndHeight"
import ContactInfo from "./ContactInfo";
import ContactMe from "./ContactMe";
import "../../styles/mainLayout.css";
import "../../styles/contact.css"

class Contact extends Component {


    render() {

        return (
            <>
                <div style={{ paddingTop: "100px" }}>
                    <ContactInfo />

                    <p style={{ textAlign: "center", fontSize: "45px", fontStyle: "italic", color: "#2096f3" }}>OR</p>

                    <ContactMe />
                </div>
            </>
        );
    }
};

export default AddClientWidthAndHeight(Contact);