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
import Title from "./Title"
import RecentProjects from "./RecentProjects"

class Home extends Component {


    render() {
        var jsx = <></>;

        if (this.props.windowWidth < 768) {
            jsx = <>
                <Title />
                <AboutMe />
                <Education />
                <RecentProjects/>
                <ContactMe />
            </>;
        }
        else {
            jsx = <p>Desktop Home Page</p>
        }
        return jsx;
    }
}

export default AddClientWidthAndHeight(Home);
