import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import Error from "../Error/Error";
//import { useCookies } from 'react-cookie';
//import API from "../../Utilities/API";
 
class SignOut extends Component {
    
    componentDidMount() {
       
       //console.log(`COOKIE: ${""}`);
        
    }


render() {
    
    const userSignedIn = this.props.state.userSignedIn;
    if (userSignedIn === false) {
        return (
            <div className="">
                <div className="">You're Signed Out!</div>
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