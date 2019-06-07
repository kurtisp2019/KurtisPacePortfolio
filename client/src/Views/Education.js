/**
 * 
 *      
 *      Education.js 
 * 
 */

import React, { Component } from "react"
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight";
import "../styles/mainLayout.css";
import "../styles/education.css";

class Education extends Component {

    render() {

        var szMainContent = "mainContent educationBackgroundColor";
        if (this.props.IsHomePage === 0 && this.props.windowWidth > 600) { 
            szMainContent += " ";
            szMainContent += "pageFullHeight";
        }
        return (

            <div className= {szMainContent}>
                <p className="title">Education</p>
                <hr className="mainContentDivider"></hr>

                <img className="schoolLogoImg" src={require("../resources/images/fullsail.png")} alt="fullsail" />
                <p className="schoolTitle" >Full Sail University</p>
                <hr className="schoolTitleDiv"></hr>
                <p className="levelOfAchievement" >Bachelors in Computer Science/Game Development</p>
                <p><a className="schoolWebsiteLink" href="https://hello.fullsail.edu/brand_1ar_games">Full Sail University Game Development website</a></p>

                <img className="schoolLogoImg" src={require("../resources/images/DU-logo.jpg")} alt="fullsail" />
                <span>     </span>
                <img className="schoolLogoImg" src={require("../resources/images/DU-certificate.png")} alt="fullsail" />
                <p className="schoolTitle">Denver University/Coding Bootcamp</p>
                <hr className="schoolTitleDiv"></hr>
                <p className="levelOfAchievement">Full Stack Web Development Certificate</p>
                <p><a className="schoolWebsiteLink" href="https://bootcamp.du.edu/coding/landing-full-2/?s=Google-Brand&&62417171885_kwd-599063230692__320040491992_g_c___dc&pkw=%2Bdenver%20%2Buniversity%20%2Bbootcamp&pcrid=320040491992&pmt=b&utm_source=google&utm_medium=cpc&utm_campaign=%5BS%5D+-+Coding+-+Brand+-+Broad&utm_term=%2Bdenver%20%2Buniversity%20%2Bbootcamp&utm_content=320040491992&d=google&k=%2Bdenver%20%2Buniversity%20%2Bbootcamp&gclid=Cj0KCQjwuLPnBRDjARIsACDzGL28UFiyadywKWctufID2Zs6dhc8PjiCy90rU0GFkAgJm5JvAkShbLkaAvmREALw_wcB&gclsrc=aw.ds">Denver University Coding Bootcamp website</a></p>

            </div>
        );
    }
}
//

export default AddClientWidthAndHeight(Education);