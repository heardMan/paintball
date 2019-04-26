/**
 * REGISTER.JS
 * this component renders the registration form
 * FEATURES:
 * -email text pattern validation
 * -password length validation
 * -form submit is not enabled until all fields are validated
 * NEEDS:
 * -additional error handling for incorrect user email exists
 * 
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Register.css";

class Register extends Component {
    render() {
        //submit enabling variables
        const passCheck1 = this.props.state.password1.length < 5 ? true : false;
        const passCheck2 = this.props.state.password1 !== this.props.state.password2 ? true : false;
        const emailCheck = this.props.state.newEmail.match(/.+@.+\../) === null ? true : false;
        const roleCheck = this.props.state.newRole === "" ? true : false;
        //email validation varibles
        const notEmailBorder = this.props.state.newEmail.match(/.+@.+\../) === null && this.props.state.newEmail.length > 0 ? "border border-danger" : "";
        const notEmailText = this.props.state.newEmail.match(/.+@.+\../) === null && this.props.state.newEmail.length > 0 ? "Please enter a more believable email" : "";
        const isEmailBorder = this.props.state.newEmail.match(/.+@.+\../) !== null ? "border border-success" : "";
        //password validation varibles
        const notPasswordBorder = this.props.state.password1.length < 6 && this.props.state.password1.length > 0 ? "border border-danger" : "";
        const notPasswordTextLength = this.props.state.password1.length < 6 && this.props.state.password1.length > 0 ? "Password must be at least 6 character long" : "";
        const passwordsNoMatchBorder = this.props.state.password1 !== this.props.state.password2 ? "border border-danger" : "";
        const passwordsNoMatchText = this.props.state.password1 !== this.props.state.password2 ? "Passwords must match" : "";
        const isPassword = this.props.state.password1.length > 5 && this.props.state.password1 === this.props.state.password2 && this.props.state.password1.length > 5 ? "border border-success" : "";
        //role validation varibles
        const roleSelectedBorder = this.props.state.newRole === "" ? "" : "border border-success";
        const roleNotSelectedText = this.props.state.newRole === "" ? "Please select a role" : "";
        //on successful registration
        if (this.props.state.successfulRegistration === true) 
            return <Redirect to={{ pathname: "/signIn" }} />
        //render the registration form
        else {
            return (
                <div>
                    <div className="col col-md-6 mx-auto shadow register_card book">
                    <div><h2 className="register_title text-center">Register</h2></div>

                    <div className="form-group">

                        <label >Email address</label>

                        <input name="newEmail" 
                               value={this.props.state.newEmail} 
                               onChange={this.props.handleInputChange} 
                               type="email" className={`form-control ${notEmailBorder} ${isEmailBorder}`} 
                               id="newEmail" aria-describedby="emailHelp" 
                               placeholder="Enter email" />

                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        
                        <small className={`d-block text-danger`}>{notEmailText}</small>

                    </div>

                    <div className="form-group">

                        <label >Password</label>

                        <input name="password1" 
                               value={this.props.state.password1} 
                               onChange={this.props.handleInputChange} 
                               type="password" 
                               className={`form-control ${notPasswordBorder} ${isPassword} ${passwordsNoMatchBorder}`} 
                               id="password1" 
                               placeholder="Password" />

                        <small className={`d-block text-danger`}>{notPasswordTextLength}</small>

                        <small className={`d-block text-danger`}>{passwordsNoMatchText}</small>

                    </div>

                    <div className="form-group">

                        <label >Re-Enter Password</label>

                        <input name="password2" 
                               value={this.props.state.password2} 
                               onChange={this.props.handleInputChange} 
                               type="password" className={`form-control ${notPasswordBorder} ${isPassword} ${passwordsNoMatchBorder}`} 
                               id="password2" placeholder="Password" />

                        <small className={`d-block text-danger`}>{notPasswordTextLength}</small>

                        <small className={`d-block text-danger`}>{passwordsNoMatchText}</small>

                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <select name="newRole" 
                                className={`form-control ${roleSelectedBorder}`} 
                                value={this.props.state.newRole} 
                                onChange={this.props.handleInputChange}>

                            <option disabled value="">Select One</option>

                            <option value="tenant">Tenant</option>

                            <option value="manager">Manager</option>

                        </select>

                        <small className={`d-block text-danger`}>{roleNotSelectedText}</small>
                    
                    </div>

                    <button disabled={ passCheck1 + passCheck2 + emailCheck + roleCheck } 
                            name="register" 
                            onClick={this.props.handleFormSubmit} 
                            className="btn register_btn">Submit</button>
                </div>
                </div>
            );
        }
    }
}

export default Register;