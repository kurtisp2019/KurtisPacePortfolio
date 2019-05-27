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

    getJSXHeaderDesktopLinks() {
        return <header>
            <div className="header">
                <HomeLogo />
                <Navs />
            </div>
        </header>;
    }

    getJSXHeaderCollapsedLinks() {
        
        return <header>
            <Navbar expand="lg" className = "mobileHeading">
                <Navbar.Brand href="#home" style={{ marginRight: 0,color: "white" }}>Kurtis Pace Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{backgroundColor: "white"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>
                        <Nav.Link href="/KurtisPacePortfolio/#/education">Education</Nav.Link>
                        <Nav.Link href="/KurtisPacePortfolio/#/workexperience">Work Experience</Nav.Link>
                        <Nav.Link href="/KurtisPacePortfolio/#/skills">Skills</Nav.Link>
                        <Nav.Link href="/KurtisPacePortfolio/#/resume">Resume</Nav.Link>
                        <Nav.Link href="/KurtisPacePortfolio/#/contact">Contact</Nav.Link>
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