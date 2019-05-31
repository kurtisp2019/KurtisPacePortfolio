/**
 * 
 *      
 *      Education.js 
 * 
 */

import React, { Component} from "react"
import AddClientWidthAndHeight from "../Higher Order Components/AddClientWidthAndHeight";

class  Education extends Component { 

    render() {

        return (
            <div style={{
                color: "#285172",
                fontFamily: "'Montserrat', sans-serif",
                paddingTop: "25px",
                paddingBottom: "40px",
                textAlign: "center",
                backgroundColor: "lightblue",
            }}>
                <p style={{ paddingTop: "30px", fontWeight: "bolder", fontSize: "45px" }}>Education</p>
                <hr style={{ marginTop: "20px", backgroundColor: "#285172", borderWidth: 3, width: "300px" }}></hr>
 
                <div>
                    <img style={{ border: "1px solid black", marginTop: "25px", width: "150px", height: "100px" }} src={require("../resources/images/fullsail.png")} alt="fullsail" />
                    <p style={{ paddingTop: "25px" }} >Full Sail University</p>
                    <p style={{ fontWeight: "bolder" }} >Bachelors in Computer Science/Game Development</p>
                    <a style={{ color: "blue" }} href="https://hello.fullsail.edu/brand_1ar_games">Full Sail University Game Development</a>
                </div>

                <div>
                    <img style={{ border: "1px solid black", marginTop: "25px", width: "150px", height: "100px" }} src={require("../resources/images/DU-logo.jpg")} alt="fullsail" />
                    <span>     </span>
                    <img style={{ border: "1px solid black", marginTop: "25px", width: "150px", height: "100px" }} src={require("../resources/images/DU-certificate.png")} alt="fullsail" />
                    <p style={{ paddingTop: "25px" }}>Denver University Coding Bootcamp</p>
                    <p style={{ fontWeight: "bolder" }}>Certificate of Completion</p>
                    <a style={{ color: "blue" }} href="https://bootcamp.du.edu/coding/landing-full-2/?s=Google-Brand&&62417171885_kwd-599063230692__320040491992_g_c___dc&pkw=%2Bdenver%20%2Buniversity%20%2Bbootcamp&pcrid=320040491992&pmt=b&utm_source=google&utm_medium=cpc&utm_campaign=%5BS%5D+-+Coding+-+Brand+-+Broad&utm_term=%2Bdenver%20%2Buniversity%20%2Bbootcamp&utm_content=320040491992&d=google&k=%2Bdenver%20%2Buniversity%20%2Bbootcamp&gclid=Cj0KCQjwuLPnBRDjARIsACDzGL28UFiyadywKWctufID2Zs6dhc8PjiCy90rU0GFkAgJm5JvAkShbLkaAvmREALw_wcB&gclsrc=aw.ds">Denver University Coding Bootcamp</a>
                </div>
            </div>
        );
    }
}
//

export default AddClientWidthAndHeight( Education);