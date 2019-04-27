import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render(){
        return(
            <div id="footer">
                <div className="col-12 my-4 text-center text-white">
                    <img className="footer_logo" width="80px" src="/rentera/rentera-white.png"></img>
                    <a href="#"><p className="footer_terms text-white">Terms & Conditions</p></a>
                    <p className="footer_copyright">&copy; Copyright rentera 2019</p>
                </div>
            </div>
        );
    }
}

export default Footer;