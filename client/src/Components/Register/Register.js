import React, { Component } from "react";

class Register extends Component {
    render() {
        const isEnabled = this.props.state.newEmail.length > 0 && this.props.state.password1.length > 0;
        const notEmail = this.props.state.newEmail.match(/.+@.+\../) === null && this.props.state.newEmail.length > 0  ? "border border-danger" : "";
        const isEmail = this.props.state.newEmail.match(/.+@.+\../) !== null ? "border border-success" : "";
        const notPassword = this.props.state.password1.length < 6 && this.props.state.password1.length > 0  ? "border border-danger" : "";
        const passwordsMatch = this.props.state.password1 !== this.props.state.password2 ? "border border-danger" : "";
        const isPassword = this.props.state.password1.length > 6 ? "border border-success" : "";
        const roleSelect = this.props.state.newRole === "" ? "border border-danger" : "border border-success";
        return (
            <div>
                <div><h2>Register</h2></div>
                <div className="form-group">
                    <label >Email address</label>
                    <input name="newEmail" value={this.props.state.newEmail} onChange={this.props.handleInputChange} type="email" className={`form-control ${notEmail} ${isEmail}`} id="newEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input name="password1" value={this.props.state.password1} onChange={this.props.handleInputChange} type="password" className={`form-control ${notPassword} ${isPassword} ${passwordsMatch}`} id="password1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label >Re-Enter Password</label>
                    <input name="password2" value={this.props.state.password2} onChange={this.props.handleInputChange} type="password" className={`form-control ${notPassword} ${isPassword} ${passwordsMatch}`} id="password2" placeholder="Password" />
                </div>
                <div className="form-group">
                    <select name="newRole" className={`form-control ${roleSelect}`} value={this.props.state.newRole} onChange={this.props.handleInputChange}>
                    <option disabled value="">Select One</option>
                        <option value="tenant">Tenant</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button disabled={!isEnabled} name="register" onClick={this.props.handleFormSubmit} className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

export default Register;