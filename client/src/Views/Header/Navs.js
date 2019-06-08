/**
 * 
 *      Navs.js
 * 
 */

import React from "react";
import Nav from "react-bootstrap/Nav";
import "../../styles/header.css";

function Navs() {

    return (
        <>
            <Nav className="justify-content-end mobileHeading" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/#/">Home</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link href="/#/projects">Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/KurtisPacePortfolio/#/education">Education</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/KurtisPacePortfolio/#/contact">Contact</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/KurtisPacePortfolio/#/resume">Resume</Nav.Link>
                </Nav.Item>
          
                <Nav.Item>
                    <Nav.Link href="/KurtisPacePortfolio/#/workexperience">Work Experience</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Navs;