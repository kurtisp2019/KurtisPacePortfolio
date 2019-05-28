/**
 * 
 *      AboutMe.js
 * 
 */

import React from "react"
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight"

function AboutMe() { 

    return(
        <>
            <p style={{backgroundColor: "lightgreen"}}> About Me.  </p>
            
        </>
    );
}

export default AddClientWidthAndHeight(AboutMe);
