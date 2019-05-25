/**
 * 
 *      Contact.js 
 * 
 */

import React, { Component } from "react"
import AddClientWidthAndHeight from "../pages/AddClientWidthAndHeight"
import ContactInfo from "../components/ContactInfo";
import ContactMe from "../components/ContactMe";

class  Contact extends Component {
    
    headerBufferMobile = 30 * 7; // 30 pixels the size of the header links, 7 the number of header links

    render() {
        return (
            <>
                <div style={{ paddingTop: this.props.windowHeight / 2 - 210 }}>
                <p>Window Width: {this.props.windowWidth}</p>
                    <p>Window Height: {this.props.windowHeight}</p>
                    <ContactInfo />
                    <ContactMe />
               </div>
            </>
        );
    }
};

export default AddClientWidthAndHeight( Contact);