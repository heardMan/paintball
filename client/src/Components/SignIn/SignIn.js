import React, { Component } from "react";

class SignIn extends Component {
    render(){
        return(
            <form>
                <div><h2>Sign In</h2></div>
                <div class="form-group">
                    <label >Email address</label>
                    <input name="email" value={this.props.state.email} onChange={this.props.handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input name="password1" value={this.props.state.password1} onChange={this.props.handleInputChange} type="password" class="form-control" id="password1" placeholder="Password" />
                </div>
                <button name="signIn" onClick={this.props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default SignIn;