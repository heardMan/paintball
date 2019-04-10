import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div>
                <div><h2>Register</h2></div>
                <div className="form-group">
                    <label >Email address</label>
                    <input name="newEmail" value={this.props.state.newEmail} onChange={this.props.handleInputChange} type="email" className="form-control" id="newEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input name="password1" value={this.props.state.password1} onChange={this.props.handleInputChange} type="password" className="form-control" id="password1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label >Re-Enter Password</label>
                    <input name="password2" value={this.props.state.password2} onChange={this.props.handleInputChange} type="password" className="form-control" id="password2" placeholder="Password" />
                </div>
                <div className="form-group">
                    <select name="newRole" className="form-control" value={this.props.state.newRole} onChange={this.props.handleInputChange}>
                    <option value="tenant">Select One</option>
                        <option value="tenant">Tenant</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button name="register" onClick={this.props.handleFormSubmit} className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

export default Register;