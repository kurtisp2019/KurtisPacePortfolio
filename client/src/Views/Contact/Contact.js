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
import "../../styles/contact/contact.css"

class Contact extends Component {


    render() {

        return (
            <>
                <div className = "contactTopPadding">
                    <ContactInfo />

                    <p className = "orText">OR</p>

                    <ContactMe />
                </div>
            </>
        );
    }
};

export default AddClientWidthAndHeight(Contact);