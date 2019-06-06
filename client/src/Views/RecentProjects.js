/**
 * 
 *      RecentProjects.js 
 * 
 */

import React, { Component } from "react"
import "../styles/mainLayout.css";
import "../styles/recentProjects.css";
import "../styles/images.css";

import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight"

var Project = function (_imgURL, _title, _desc, _githubLink, _websiteLink) {

    this.imgURL = _imgURL;
    this.title = _title;
    this.description = _desc;
    this.githubLink = _githubLink;
    this.websiteLink = _websiteLink;
}

class RecentProjects extends Component {


    time = {
        startTime: null
    };

    stateMachine = {
        currentState: "",
        //states: ["visible", "alphaOutNext", "alphaInNext", "alphaOutPrev", "alphaInPrev" ],

        changeState: (_newState) => {
            if (_newState === this.currentState)
                return;

            this.currentState = _newState;
            // switch (this.currentState) {

            //     case "visible":
            //         break;
            //     case "alphaOutNext":
            //         break;
            //     case "alphaInNext":
            //         break;
            //     case "alphaOutPrev":
            //         break;
            //     case "alphaInPrev":
            //         break;
            //     default:

            // }
        },

        update: (_dt) => {
            switch (this.currentState) {

                case "visible":
                    break;
                case "alphaOutNext":
                    this.setState({ opacity: this.state.opacity - this.state.transitionSpeed * _dt });
                    if (this.state.opacity <= 0.0) {

                        // cap the opacity
                        this.setState({ opacity: 0.0 });

                        // change the next state
                        this.stateMachine.changeState("alphaInNext");

                        // change the project to the next one
                        this.setState({ m_curProject: this.state.m_curProject + 1 });

                    }
                    break;
                case "alphaInNext":
                    this.setState({ opacity: this.state.opacity + this.state.transitionSpeed * _dt });
                    if (this.state.opacity >= 1.0) {

                        // cap the opacity
                        this.setState({ opacity: 1.0 });

                        // change the next state
                        this.stateMachine.changeState("visible");



                    }
                    break;
                case "alphaOutPrev":
                    this.setState({ opacity: this.state.opacity - this.state.transitionSpeed * _dt });
                    if (this.state.opacity <= 0.0) {

                        // cap the opacity
                        this.setState({ opacity: 0.0 });

                        // change the next state
                        this.stateMachine.changeState("alphaInPrev");

                        // change the project to the next one
                        this.setState({ m_curProject: this.state.m_curProject - 1 });

                    }
                    break;

                case "alphaInPrev":
                    this.setState({ opacity: this.state.opacity + this.state.transitionSpeed * _dt });
                    if (this.state.opacity >= 1.0) {

                        // cap the opacity
                        this.setState({ opacity: 1.0 });

                        // change the next state
                        this.stateMachine.changeState("visible");



                    }
                    break;

                default:

            }
        }

    };

    m_Projects = [];

    state = {

        opacity: 1.0,
        transitionSpeed: 1.0,
        m_curProject: 0

    };

    componentWillMount() {
        this.addProjects();


        // intitialize Time
        this.time.startTime = new Date().getTime();

        requestAnimationFrame(this.update);
    }

    addProjects() {
        var burgerImg = require("../resources/images/burger-ss1.png");
        var pongImg = require("../resources/images/Pong.png");
        var ticketMasterImg = require("../resources/images/Ticketmaster-Search.png");

        this.m_Projects.push(new Project(
            pongImg,
            "Pong",
            "This is the game Pong! It is an MVC structured React application that uses Express, MongoDB/Mongoose, and Bootstrap.  It has 1 player, 2 player, practice mode and as well an options menu which allows the user to customize some of the gameplay.  The options are stored in a database using MongoDB and Mongoose and read later when the player enters the game.  It also contains events which occur while playing thats logic is encapsulated inside an event manager.",
            "https://github.com/kurtisp2019/ReactPong",
            "https://sgkppong.herokuapp.com/"));

        this.m_Projects.push(new Project(
            burgerImg,
            "Burger",
            "This is a pretty basic MVC structured, node based site that uses a custom ORM, express, mysql, path, and handlebars.It allows the user to add burgers to a list with a boolean called \"devoured\" set to false.  When the user clicks the devour button it flips the bool in the sql database and is displayed in the \"devoured\" list.",
            "https://github.com/kurtisp2019/burger",
            "https://burger041319.herokuapp.com/"));

        this.m_Projects.push(new Project(
            ticketMasterImg,
            "Ticketmaster Search",
            "This site uses Firebase, Firebase authentification, Google Maps api, and Ticketmasters api to allow the user to search for events.  The user can specify the location theyd like to look into or leave it blank to get all events, the results will be displayed on the map in the center of the home page.  The user can also create an account on Firebase and save events they like to their account and can be viewed on their account page.",
            "https://github.com/kurtisp2019/Ticketmaster-Search",
            "https://kurtisp2019.github.io/Ticketmaster-Search/"));



    }

    update = () => {


        // find the time elapsed
        var currentTime = new Date().getTime();
        var dt = (currentTime - this.time.startTime) / 1000;
        this.time.startTime = currentTime;

        console.log("dt " + dt);

        // update the state machine
        this.stateMachine.update(dt);

        requestAnimationFrame(this.update);

    }

    nextProject = () => {

        if (this.state.m_curProject < this.m_Projects.length - 1)
            this.stateMachine.changeState("alphaOutNext");

    }
    prevProject = () => {
        if (this.state.m_curProject > 0)
            this.stateMachine.changeState("alphaOutPrev");

    }

    getHomePageArrowButtons() {
        return (<>
            <div style={{ height: "185px" }}>
                <div style={{ positon: "relative" }}>
                    <img onClick={this.prevProject} className="arrowBtnImg scaleImg " src={require("../resources/images/arrowBtn.png")} alt="arrowImg" />
                    <img onClick={this.nextProject} className="arrowBtnImg flippedImg " src={require("../resources/images/arrowBtn.png")} alt="arrowImg" />
                    <label className = "prevBtnLabel">Previous</label>
                    <label className = "nextBtnLabel">Next</label>
                </div>
            </div>
        </>);
    }

    // 3 screenshots
    // title
    // description
    // link 
    // link to github
    render() {
        return (
            <>
                <div className="mainContent recentProjBackgroundColor">
                    <p className="title">Recent Projects</p>
                    <hr className="mainContentDivider"></hr>

                    <div style={{ opacity: this.state.opacity }}>
                        <img className="projectImg" src={this.m_Projects[this.state.m_curProject].imgURL} alt="screenshot" />
                        <p key={this.m_Projects[this.state.m_curProject].title} className="projectTitle">{this.state.m_curProject + 1} of {this.m_Projects.length} "{this.m_Projects[this.state.m_curProject].title}"</p>
                        <hr className = "projectTitleDiv"></hr>

                        <p className = "projectDesc"> {this.m_Projects[this.state.m_curProject].description} </p>
                        <br></br>
                        <p className="websiteLinkTitle">link to actual site:</p>
                        <p className = "websiteLink"><a href={this.m_Projects[this.state.m_curProject].websiteLink}>{this.m_Projects[this.state.m_curProject].githubLink}</a></p>
                        <br></br>
                        <p className="websiteLinkTitle">link to github code</p>
                        <p className="websiteLink"><a href={this.m_Projects[this.state.m_curProject].githubLink}>{this.m_Projects[this.state.m_curProject].websiteLink}</a></p>
                    </div>
                    <br></br>
                    <div>
                        {this.getHomePageArrowButtons()}
                    </div>

                </div>

            </>);
    }
}

export default AddClientWidthAndHeight(RecentProjects); 