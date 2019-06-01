/**
 * 
 *      RecentProjects.js 
 * 
 */

import React, { Component } from "react"
import "../styles/images.css";

var Project = function (_imgURL, _title, _desc, _githubLink, _websiteLink) {

    this.imgURL = _imgURL;
    this.title = _title;
    this.description = _desc;
    this.githubLink = _githubLink;
    this.websiteLink = _websiteLink;
}

class RecentProjects extends Component {

    m_Projects = [];

    state = {

        opacity: 1.0,
        m_curProject: 0

    };



    componentWillMount() {
        this.addProjects();

        //requestAnimationFrame(this.update);
    }

    addProjects() {
        var burgerImg = require("../resources/images/burger-ss1.png");
        var pongImg = require("../resources/images/Pong.png");
        var ticketMasterImg = require("../resources/images/Ticketmaster-Search.png");

        this.m_Projects.push(new Project(
            pongImg,
            "Pong",
            "This is the game Pong! It is an MVC structured React application that uses Express, MongoDB/Mongoose, and Bootstrap.  It has 1 player, 2 player, practice mode and as well an options menu which allows the user to customize some of the gameplay.  The options are stored in a database using MongoDB and Mongoose and read later when the player enters the game.  It also contains events which occur while playing thats logic is encapsulated inside an event manager.",
            "https://sgkppong.herokuapp.com/",
            "https://github.com/kurtisp2019/ReactPong"));

        this.m_Projects.push(new Project(
            burgerImg,
            "Burger",
            "This is a pretty basic MVC structured, node based site that uses a custom ORM, express, mysql, path, and handlebars.It allows the user to add burgers to a list with a boolean called \"devoured\" set to false.  When the user clicks the devour button it flips the bool in the sql database and is displayed in the \"devoured\" list.",
            "https://burger041319.herokuapp.com/",
            "https://github.com/kurtisp2019/burger"));

        this.m_Projects.push(new Project(
            ticketMasterImg,
            "Ticketmaster Search",
            "This site uses Firebase, Firebase authentification, Google Maps api, and Ticketmasters api to allow the user to search for events.  The user can specify the location theyd like to look into or leave it blank to get all events, the results will be displayed on the map in the center of the home page.  The user can also create an account on Firebase and save events they like to their account and can be viewed on their account page.",
            "https://kurtisp2019.github.io/Ticketmaster-Search/",
            "https://github.com/kurtisp2019/Ticketmaster-Search"));



    }

    update = () => {

        console.log("updating");

        requestAnimationFrame(this.update);

     }

    nextProject = () => {
       
        if (this.state.m_curProject < this.m_Projects.length-1)
             this.setState({ m_curProject: this.state.m_curProject + 1 });
        // if (this.state.m_curProject === this.m_Projects.length)
        //     this.setState({ m_curProject: 0 });
        
    }
    prevProject = () => {
        if (this.state.m_curProject > 0)
        this.setState({ m_curProject: this.state.m_curProject - 1 });
        // if (this.state.m_curProject < 0)
        //     this.setState({ m_curProject: this.m_Projects.length - 1 });

        
    }

    // 3 screenshots
    // title
    // description
    // link 
    // link to github
    render() {
        let i = 1;
        return (
            <>


                <div style={{ opacity: this.state.opacity, textAlign: "center", color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingTop: "40px", paddingBottom: "25px", backgroundColor: "orange" }}>
                    <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "45px" }}>Recent Projects</p>
                    <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px" }}></hr>


                                  <img style={{ width: "350px", height: "250px", paddingTop: "25px" }} src={this.m_Projects[this.state.m_curProject].imgURL} alt="screenshot" />
                                <p key={this.m_Projects[this.state.m_curProject].title} style={{ paddingTop: "10px", fontSize: "35px" }}>{i++}. "{this.m_Projects[this.state.m_curProject].title}"</p>
                                <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "70px" }}></hr>

                                <p style={{ fontSize: "25px", marginLeft: "5vw", marginRight: "5vw" }}> {this.m_Projects[this.state.m_curProject].description} </p>
                                <br></br>
                                <p>link to actual site:</p>
                                <p style={{ fontSize: "20px", marginTop: "3px" }}><a href={this.m_Projects[this.state.m_curProject].githubLink}>{this.m_Projects[this.state.m_curProject].githubLink}</a></p>
                                <br></br>
                                <p >link to github code</p>
                                <p style={{ fontSize: "20px", marginTop: "3px" }}><a href={this.m_Projects[this.state.m_curProject].websiteLink}>{this.m_Projects[this.state.m_curProject].websiteLink}</a></p>
          
                    <div style={{ height: "250px" }}>
                        <img onClick={this.prevProject}  className="scaleImg" style={{ width: "350px", height: "250px", position: "absolute" }} src={require("../resources/images/arrowBtn.png")} alt="arrowImg" />
                        <img  onClick={this.nextProject} className="flippedImg " style={{ width: "350px", height: "250px", position: "absolute" }} src={require("../resources/images/arrowBtn.png")} alt="arrowImg" />
                    </div>
                    {/* {this.m_Projects.map(_project => {
                        return (
                            <>
                                <img style={{ width: "350px", height: "250px", paddingTop: "25px" }} src={_project.imgURL} alt="screenshot" />
                                <p key={_project.title} style={{ paddingTop: "10px", fontSize: "35px" }}>{i++}. "{_project.title}"</p>
                                <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "70px" }}></hr>

                                <p key={_project.description} style={{ fontSize: "25px", marginLeft: "5vw", marginRight: "5vw" }}> {_project.description} </p>
                                <br></br>
                                <p>link to actual site:</p>
                                <p key={_project.githubLink} style={{ fontSize: "20px", marginTop: "3px" }}><a href={_project.githubLink}>{_project.githubLink}</a></p>
                                <br></br>
                                <p >link to github code</p>
                                <p key={_project.websiteLink} style={{ fontSize: "20px", marginTop: "3px" }}><a href={_project.websiteLink}>{_project.websiteLink}</a></p>
                            </>)
                    })} */}

                </div>

            </>);
    }
}

export default RecentProjects; 