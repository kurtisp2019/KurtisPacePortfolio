/**
 * 
 *      HomeLogo.js
 * 
 */

import React from "react"
import Navbar from "react-bootstrap/Navbar"

function HomeLogo() {

  return (
    <>
      <Navbar.Brand style={{ marginLeft: "10px", float: "left" }} href="/">
        <img
          src={require("../resources/images/computer-icon.jpg")}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Kurtis Pace"
        />
      </Navbar.Brand>
      <span style={{ paddingTop: "10px", float: "left" }} >Kurtis Pace</span>
    </>
  );
}

export default HomeLogo