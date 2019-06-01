/**
 * 
 *      Header.js
 * 
 */
import "../../styles/header.css"
import React, { Component } from "react"
import HomeLogo from "./HomeLogo"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Navs from "./Navs"

import { Nav, Navbar, NavDropdown, Button, Form , FormControl } from 'react-bootstrap'
import AddClientWidthAndHeight from "../../Higher Order Components/AddClientWidthAndHeight"

class Header extends Component {

    state = {
        m_bCollapsedMenuExpanded: false
    }

    getJSXHeaderDesktopLinks() {
        return <header>
            <div className="header">
                <HomeLogo />
                <Navs />
            </div>
        </header>;
    }
    
    menuToggle = () => {
        if (this.state.m_bCollapsedMenuExpanded)
            this.setState({m_bCollapsedMenuExpanded: false});
            else
            this.setState({ m_bCollapsedMenuExpanded: true });
        
        this.props.parentCallback(this.state.m_bCollapsedMenuExpanded);
    }

    getJSXHeaderCollapsedLinks() {
        
        return <header>
            <Navbar onToggle = {this.menuToggle} expand="lg" className = "mobileHeading">
                <Navbar.Brand href="/KurtisPacePortfolio/#/" style={{ marginRight: 0,color: "white" }}>Kurtis Pace Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{backgroundColor: "white"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                <hr style = {{backgroundColor: "white", size: 1}}></hr>
                    <Nav className="mr-auto">
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/">Home</Nav.Link>
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/education">Education</Nav.Link>
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/contact">Contact</Nav.Link>
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/projects">Recent Projects</Nav.Link>
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/workexperience">Work Experience</Nav.Link>
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/skills">Skills</Nav.Link>
                        <Nav.Link style = {{color: "white"}} href="/KurtisPacePortfolio/#/resume">Resume</Nav.Link>
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
        }
        return jsx;

    }
};

export default AddClientWidthAndHeight( Header);