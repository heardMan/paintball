import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <form>
                <div><h2>Register</h2></div>
                <div class="form-group">
                    <label >Email address</label>
                    <input name="email" value={this.props.state.email} onChange={this.props.handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input name="password1" value={this.props.state.password1} onChange={this.props.handleInputChange} type="password" class="form-control" id="password1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label >Re-Enter Password</label>
                    <input name="password2" value={this.props.state.password2} onChange={this.props.handleInputChange} type="password" class="form-control" id="password2" placeholder="Password" />
                </div>
                <button name="register" onClick={this.props.handleFormSubmit} type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Register;