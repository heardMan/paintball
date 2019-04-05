import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import API from "./Utilities/API";
import { constants } from "os";

class App extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    signInEmail:"",
    signInPassword: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target.name;
    if(form === "register"){
      if(this.state.password1 === this.state.password2){
        const newUser = {
          email: this.state.email,
          password: this.state.password1
        }
        API.registerUser(newUser)
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
      }
    } else if(form === "signIn"){
      const user = {
        email: this.state.email,
        password: this.state.password1
      }
      API.signInUser(user)
      .then(resp => console.log(resp))
        .catch(err => console.log(err));
    }

  };

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          
            <Route exact path="/register" render={(routeProps) => (<Register {...routeProps} 
                                              state={this.state}
                                              handleFormSubmit={this.handleFormSubmit}
                                              handleInputChange={this.handleInputChange}
                                        />)}
             />
            <Route exact path="/signIn" render={(routeProps) => (<SignIn {...routeProps} 
                                              state={this.state}
                                              handleFormSubmit={this.handleFormSubmit}
                                              handleInputChange={this.handleInputChange}
                                        />)}
            />

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
