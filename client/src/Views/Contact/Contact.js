/**
 * 
 *      Contact.js 
 * 
 */

import React, { Component } from "react"
import AddClientWidthAndHeight from "../../Higher Order Components/AddClientWidthAndHeight"
import ContactInfo from "./ContactInfo";
import ContactMe from "./ContactMe";
import  "../../styles/contact.css"

class  Contact extends Component {
    

    render() {

        var headerBufferMobile = 0.0;
        if (this.props.headerMenuIsCollapsed)
            headerBufferMobile = 30.0; // 30 pixels the size of the header links, 7 the number of header links
        else
            headerBufferMobile = 30.0 * 7.0;

        return (
            <>
                {/* <div className = "background"> */}
                <div className = "background" style={{ paddingTop: (this.props.windowHeight / 2) - headerBufferMobile }}>
         
                    <ContactInfo />
               
                    <p style={{ textAlign: "center", fontSize: "45px", fontStyle: "italic" }}>OR</p>

                    <ContactMe />

                    <p>Window Width: {this.props.windowWidth}</p>
                    <p>Window Height: {this.props.windowHeight}</p>
               </div>
            </>
        );
    }
};

export default AddClientWidthAndHeight( Contact);