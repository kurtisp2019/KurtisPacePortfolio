/**
 * 
 *      Home.js 
 * 
 */

import React, { Component } from "react"
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight"

// pages
import AboutMe from "./AboutMe"
import ContactInfo from "./Contact/ContactInfo"
import ContactMe from "./Contact/ContactMe"
import Education from "./Education"

class Home extends Component {


    render() {
        var jsx = <></>;

        if (this.props.windowWidth < 768) {
            jsx = <>
                <AboutMe />
                <div style={{ background: "lightyellow" }}>
                    <ContactInfo />
                    <ContactMe />
                </div>
                <Education />
            </>;
        }
        else {
            jsx = <p>Desktop Home Page</p>
        }
        return jsx;
    }
}

export default AddClientWidthAndHeight(Home);
