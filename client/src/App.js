import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ManagerView from "./Components/ManagerView/ManagerView";
import TenantView from "./Components/TenantView/TenantView";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Welcome/Welcome";
import StripeForm from "./Components/StripeForm/StripeCard";
import API from "./Utilities/API";
import { withCookies } from 'react-cookie';

class App extends Component {
  
  state = {
    //currentUser
    userEmail: "",
    userId:"",
    roles: [],
    //login
    
    email: "",
    password: "",
    //register
    newEmail: "",
    newRole: "",
    password1: "",
    password2: "",
    //create ticket
    ticketSubject: "",
    ticketLocation: "",
    ticketDescription: "",
    
  };

  componentDidMount(){
    API.checkAuth(this.props.cookies.token)
    .then(resp => {
      console.log(resp.data);
      const data = resp.data.roles;
      this.setState({
        userEmail: resp.data.email,
        userId: resp.data.id,
        roles: data
      })
    })
    .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  };

  registerUser = () => {
    if(
      this.state.password1 === this.state.password2 &&
      this.state.newEmail !== '' && 
      this.state.newRole !== '' && 
      this.state.password1.length > 2 
      ){
      const newUser = {
        email: this.state.newEmail,
        password: this.state.password1,
        role: this.state.newRole
      }
      //console.log(newUser);
      API.registerUser(newUser)
      .then(resp => {
        console.log(resp)
        
      })
      .catch(err => console.log(err));
    } else {
      console.log("fill out all fields complteely");
    }
  }

  signInUser = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    
    API.signInUser(user)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
  
  }

  createTicket = () => {
    const ticket = {
      requester: this.state.userId,
      subject: this.state.ticketSubject,
      location: this.state.ticketLocation,
      description: this.state.ticketDescription
    }
    API.createTicket(ticket)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target.name;
    if(form === "register"){
      this.registerUser();
    } else if(form === "signIn"){
      this.signInUser();
    } else if(form === "addNewProperty"){
      console.log(event.target.name)
    } else if(form === "newTicket"){
      console.log(event.target.name);
      this.createTicket();
    } 

  };

  render() {
    return (
      
      <Router>
        <div className="container-fluid with-fixed-nav">
          <Navbar state={this.state}/>

          <Route exact path="/" render={(routeProps) => {
                                            const manager = this.state.roles.indexOf("manager")>-1? true: false;
                                            const tenant = this.state.roles.indexOf("tenant")>-1? true: false;
                                            
                                            if(manager){
                                              return(
                                              <ManagerView {...routeProps} 
                                              state={this.state}
                                              handleFormSubmit={this.handleFormSubmit}
                                              handleInputChange={this.handleInputChange}
                                        />
                                        )

                                            } else if(tenant) {

                                              return(
                                                <TenantView {...routeProps} 
                                                  state={this.state}
                                                  handleFormSubmit={this.handleFormSubmit}
                                                  handleInputChange={this.handleInputChange}
                                                />
                                                )
                                            } else {

                                              return(
                                                <Welcome {...routeProps} 
                                                  state={this.state}
                                                  handleFormSubmit={this.handleFormSubmit}
                                                  handleInputChange={this.handleInputChange}
                                                />
                                                )
                                            }
                                            
                                      }}
            />

          <Route exact path="/tenant" render={(routeProps) => (<TenantView {...routeProps} 
                                              state={this.state}
                                              handleFormSubmit={this.handleFormSubmit}
                                              handleInputChange={this.handleInputChange}
                                        />)}
             />

          <Route exact path="/manager" render={(routeProps) => (<ManagerView {...routeProps} 
                                              state={this.state}
                                              handleFormSubmit={this.handleFormSubmit}
                                              handleInputChange={this.handleInputChange}
                                        />)}
             />
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

export default withCookies(App);
