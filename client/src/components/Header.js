/**
 * 
 *      Header.js
 * 
 */
import "../styles/header.css"
import React, { Component } from "react"
import HomeLogo from "./HomeLogo"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Navs from "../components/Navs"

import { Nav, Navbar, NavDropdown, Button, Form , FormControl } from 'react-bootstrap'
import AddClientWidthAndHeight from "../pages/AddClientWidthAndHeight"

class Header extends Component {

   
    componentDidMount() { 

    }

    componentWillUnmount() {
    }

    getJSXHeaderDivLinks() {
        return <header>
                <div className= "heading">Kurtis Pace Portfolio</div>
                <Link to="/"><div className="headerLinks" variant="outline-success">Home</div></Link>
                <Link to="/education"><div className="headerLinks" variant="outline-success">Education</div></Link>
                <Link to="/workexperience"><div className="headerLinks" variant="outline-success">Work Experience</div></Link>
               <Link to="/skills"><div className="headerLinks" variant="outline-success">Skills</div></Link>
               <Link to="/resume"><div className="headerLinks" variant="outline-success">Resume</div></Link>
                <Link to="/contact"><div className="headerLinks" variant="outline-success">Contact</div></Link>
            </header>;
    }

    getJSXHeaderDesktopLinks() {
        return <header>
            <div className="header">
                <HomeLogo />
                <Navs />
            </div>
        </header>;
    }

    // style={{ borderBottom: "1px solid white" }}
    getJSXHeaderCollapsedLinks() {
        
        return <header>
            <Navbar expand="lg" className = "mobileHeading">
                <Navbar.Brand href="#home" style={{ color: "white", borderBottom: "1px solid white" }}>Kurtis Pace Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{backgroundColor: "white"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{ color: "white" }} href="/">Home</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/education">Education</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/workexperience">Work Experience</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/skills">Skills</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/resume">Resume</Nav.Link>
                        <Nav.Link style={{ color: "white" }} href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>;
    }

    render() {
       // return this.state.width > 600 ?  <div className="header"> <HomeLogo /> <Navs />  </div> : null;
        var jsx = <></>;
        
        if (this.props.windowWidth > 768) {

            
            jsx = this.getJSXHeaderDesktopLinks(); 
        }
        else { 
            jsx = this.getJSXHeaderCollapsedLinks(); 
           // jsx = this.getJSXHeaderDivLinks();
        }
        return jsx;

    }
};

export default AddClientWidthAndHeight( Header);