/**
 * 
 *      Home.js 
 * 
 */

import React, { Component } from "react";
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight";

// pages
import AboutMe from "./AboutMe";
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
            <Education IsHomePage={1}/>
            <RecentProjects />
            <WorkExperience IsHomePage={1}/>
            <ContactMe />
        </>;
        return jsx;
    }
}

export default AddClientWidthAndHeight(Home);
