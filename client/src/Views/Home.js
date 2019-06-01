/**
 * 
 *      Home.js 
 * 
 */

import React, { Component } from "react";
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight";

// pages
import AboutMe from "./AboutMe";
import ContactInfo from "./Contact/ContactInfo";
import ContactMe from "./Contact/ContactMe";
import Education from "./Education";
import Title from "./Title";
import RecentProjects from "./RecentProjects";
import WorkExperience from "./WorkExperience";

class Home extends Component {


    render() {
        var jsx = <></>;

        jsx = <>
                <Title />
                <AboutMe />
                <Education />
            <RecentProjects />
            <WorkExperience/>
                <ContactMe />
            </>;
        // if (this.props.windowWidth < 768) {
        //     jsx = <>
        //         <Title />
        //         <AboutMe />
        //         <Education />
        //         <RecentProjects/>
        //         <ContactMe />
        //     </>;
        // }
        // else {
        //     jsx = <p>Desktop Home Page</p>
        // }
        return jsx;
    }
}

export default AddClientWidthAndHeight(Home);
