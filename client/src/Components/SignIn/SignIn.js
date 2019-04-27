/**
 * SIGNIN.JS
 * this component renders the sign in form
 * FEATURES:
 * -email text pattern validation
 * -password length validation
 * -form submit is not enabled until all fields are validated
 * NEEDS:
 * -additional error handling for incorrect user email submission
 * -additional error handling for incorrect user password submission
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./SignIn.css";

class SignIn extends Component {

    render() {
        //submit enabling variables
        const passCheck = this.props.state.password.length < 6 ? null:false;
        const emailCheck = this.props.state.email.match(/.+@.+\../) === null;
        const enabled = passCheck === true && emailCheck === true ? true: false;
        //email validation varibles
        const notEmailBorder = this.props.state.email.match(/.+@.+\../) == null && this.props.state.email.length > 0 ? "border border-danger" : "";
        const isEmailBorder = this.props.state.email.match(/.+@.+\../) !== null && this.props.state.email.length > 0 ? "border border-success" : "";
        const notEmailText = this.props.state.email.match(/.+@.+\../) === null && this.props.state.email.length > 0  ? "Please enter a more believable email" : "";
        //password validation varibles
        const notPasswordBorder = this.props.state.password.length < 6 && this.props.state.password.length > 0 ? "border border-danger" : "";
        const isPasswordBorder = this.props.state.password.length > 5 ? "border border-success" : "";
        const passwordTooShortText = this.props.state.password.length < 6 && this.props.state.password.length > 0  ? "Password must be at least 6 character long" : "";
        //on successful sign in redirect to the index page
        if (this.props.state.userSignedIn === true ) return <Redirect to={{ pathname: "/" }} /> 
        //render the sign in form
        else {
            return (
            <div className="col-6 mx-auto register_card shadow">
                <form className="form-box mx-auto">
                    <div><h2 className="text-center">Sign In</h2></div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input name="email" 
                               value={this.props.state.email} 
                               onChange={this.props.handleInputChange} 
                               type="email" className={`form-control ${notEmailBorder} ${isEmailBorder}`} 
                               id="exampleInputEmail1" aria-describedby="emailHelp" 
                               placeholder="Enter email" />
                        <small className={`d-block text-danger`}>{notEmailText}</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input name="password" 
                               value={this.props.state.password} 
                               onChange={this.props.handleInputChange} 
                               type="password" className={`form-control ${notPasswordBorder} ${isPasswordBorder}`} 
                               id="password" placeholder="Password" />
                        <small className={`d-block text-danger`}>{passwordTooShortText}</small>
                    </div>
                    <button name="signIn" 
                            disabled={emailCheck + passCheck} 
                            onClick={this.props.handleFormSubmit} 
                            type="submit" 
                            className="btn universal_btn">Submit</button>
                
                </form>
                
                </div>

                // <form>
                //     <div><h2>Sign In</h2></div>

                //     <div className="form-group">

                //         <label >Email address</label>

                //         <input name="email" 
                //                value={this.props.state.email} 
                //                onChange={this.props.handleInputChange} 
                //                type="email" className={`form-control ${notEmailBorder} ${isEmailBorder}`} 
                //                id="exampleInputEmail1" aria-describedby="emailHelp" 
                //                placeholder="Enter email" />

                //         <small className={`d-block text-danger`}>{notEmailText}</small>

                //     </div>

                //     <div className="form-group">

                //         <label >Password</label>

                //         <input name="password" 
                //                value={this.props.state.password} 
                //                onChange={this.props.handleInputChange} 
                //                type="password" className={`form-control ${notPasswordBorder} ${isPasswordBorder}`} 
                //                id="password" placeholder="Password" />

                //         <small className={`d-block text-danger`}>{passwordTooShortText}</small>

                //     </div>

                //     <button name="signIn" 
                //             disabled={emailCheck + passCheck} 
                //             onClick={this.props.handleFormSubmit} 
                //             type="submit" 
                //             className="btn btn-primary">Submit</button>
                
                // </form>
            );
        }
    }
}

export default SignIn;