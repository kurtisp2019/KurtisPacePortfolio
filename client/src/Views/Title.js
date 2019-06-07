/**
 * 
 *      
 *      Title.js 
 * 
 */

import React from "react";
import "../styles/title.css";
 
function Title() { 
    return (
        <>
            <div className= "titleMainContent">
            <img className = "profilePic" src={require("../resources/images/kp-profile-pic.jpg")} alt="profile pic"></img>
                <p className= "profileName">Kurtis Pace</p>
                <hr className="profileDiv"></hr>
                <p className = "profileInfo">Junior Web and Game Developer</p>
                <p className = "profileInfo">904-571-8681</p>
                <p className = "profileInfo">kurtis.pace2011@gmail.com</p>
                <p className = "profileLinkedInLink"><a style={{ color: "white" }} href="https://www.linkedin.com/in/kurtis-pace-822a86154/">https://www.linkedin.com/in/kurtis-pace-822a86154/</a></p>
            </div>
        </>
    );
}
//

export default Title;