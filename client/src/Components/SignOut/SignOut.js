import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import Error from "../Error/Error";
//import { useCookies } from 'react-cookie';
//import API from "../../Utilities/API";

import { Jumbotron, Button } from "react-bootstrap";

//importing css 
import "./SignOut.css";
 
class SignOut extends Component {
    
    componentDidMount() {
       
       //console.log(`COOKIE: ${""}`);
        
    }


render() {
    
    const userSignedIn = this.props.state.userSignedIn;
    if (userSignedIn === false) {
        return (
            <div className="universalCard shadow col-6 mx-auto">
                <div className="universal_card shadow" style={{marginBottom: 0}}>
                    <div className="text-center signout">Goodbye!</div>
                    <div className="text-center">You are signed out!</div>
                </div>
            </div>


        );
    } else {
        return (
            <Error />
        )

    }

}
}

export default SignOut;