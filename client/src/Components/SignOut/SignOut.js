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


            <Jumbotron>
                 <h1>You're Signed Out!</h1>
                     <p>
                       This is a simple hero unit, a simple jumbotron-style component for calling
                       extra attention to featured content or information.
                     </p>
                     <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
            </Jumbotron>
            
            // <div className="">
            //     <div className="">You're Signed Out!</div>
            // </div>

        );
    } else {
        return (
            <Error />
        )

    }

}
}

export default SignOut;