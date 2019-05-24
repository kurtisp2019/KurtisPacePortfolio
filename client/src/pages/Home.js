/**
 * 
 *      Home.js 
 * 
 */

import React, { Component } from "react"
import AddClientWidthAndHeight from "../pages/AddClientWidthAndHeight"

// pages
import AboutMe from "./AboutMe"
import ContactInfo from "../components/ContactInfo"
import ContactMe from "../components/ContactMe"
import Education from "./Education"

class Home extends Component { 


    render() {
        var jsx = <></>;

        if (this.props.windowWidth < 768) {
            jsx = <>
                <p> Home Page!  </p>
                <AboutMe />
                <ContactInfo />
                <ContactMe />
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
