import React, { Component } from "react";

import { Redirect } from "react-router-dom";


class SignIn extends Component {
    

    render() {
        const manager = this.props.state.roles.indexOf("manager") > -1 ? true : false;
        const tenant = this.props.state.roles.indexOf("tenant") > -1 ? true : false;
        const isEnabled = this.props.state.email.match(/.+@.+\../) !== null && this.props.state.password.length > 6;
        const notEmail = this.props.state.email.match(/.+@.+\../) == null && this.props.state.email.length > 0 ? "border border-danger" : "";
        const notPassword = this.props.state.password.length < 6 && this.props.state.password.length > 0 ? "border border-danger" : "";
        const isEmail = this.props.state.email.match(/.+@.+\../) !== null && this.props.state.email.length > 0 ? "border border-success" : "";
        const isPassword = this.props.state.password.length > 6 ? "border border-success" : "";
        const notPasswordTextLength = this.props.state.password.length < 6 && this.props.state.password.length > 0  ? "Password must be at least 6 character long" : "";
        const notEmailText = this.props.state.email.match(/.+@.+\../) === null && this.props.state.email.length > 0  ? "Please enter a more believable email" : "";
        if (manager === true) {
            return (<Redirect to={{ pathname: "/manager" }} />);
        } else if (tenant === true) {
            return (<Redirect to={{ pathname: "/tenant" }} />);
        } else {
            return (
                <form>
                    <div><h2>Sign In</h2></div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input name="email" value={this.props.state.email} onChange={this.props.handleInputChange} type="email" className={`form-control ${notEmail} ${isEmail}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small className={`d-block text-danger`}>{notEmailText}</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input name="password" value={this.props.state.password} onChange={this.props.handleInputChange} type="password" className={`form-control ${notPassword} ${isPassword}`} id="password" placeholder="Password" />
                        <small className={`d-block text-danger`}>{notPasswordTextLength}</small>
                    </div>
                    <button name="signIn" disabled={isEnabled} onClick={this.props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            );
        }
    }
}

export default SignIn;