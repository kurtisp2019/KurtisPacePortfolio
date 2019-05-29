/**
 * 
 *      RecentProjects.js 
 * 
 */

import React from "react"
function RecentProjects() {
    // 3 screenshots
    // title
    // description
    // link 
    // link to github
    return (
        <>
            <div style={{ textAlign: "center", color: "#285172", fontFamily: "'Montserrat', sans-serif", paddingTop: "40px", paddingBottom: "25px", backgroundColor: "orange" }}>
                <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "45px" }}>Recent Projects</p>
                <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px" }}></hr>

                <img style={{ width: "350px", height: "250px", paddingTop: "25px"}} src={require("../resources/images/sequelize-burger-ss1.png")} alt = "sequelize burger screenshot"/>
      
                <p style={{paddingTop: "10px", fontSize: "35px"}}>1. "Burger"</p>
                <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "70px" }}></hr>

                <p style={{ fontSize: "25px",marginLeft: "5vw", marginRight: "5vw"}}>This is a pretty basic MVC structured, node based site that uses a custom ORM, express, mysql, path, and handlebars.
                    It allows the user to add burgers to a list with a boolean called "devoured" set to false.  When the user clicks the devour
                    button it flips the bool in the sql database and is displayed in the "devoured" list.  </p>
                <br></br>
                <p>link to actual site:</p>
                <p style={{ fontSize: "20px", marginTop: "3px"}}><a href="https://burger041319.herokuapp.com/">https://burger041319.herokuapp.com/</a></p>
                <br></br>
                <p >link to github code</p>
                <p style={{fontSize: "20px", marginTop: "3px"}}><a href="https://burger041319.herokuapp.com/">https://burger041319.herokuapp.com/</a></p>

            </div>

        </>);
}

export default RecentProjects;

//          <img src={require("../resources/images/sequelize-burger-ss3.png")} alt="sequelize burger screenshot" />
{/* <img src={require("../resources/images/sequelize-burger-ss2.png")} alt = "sequelize burger screenshot"/> */}