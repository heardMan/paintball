import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ManagerView from "./Components/ManagerView/ManagerView";
import TenantView from "./Components/TenantView/TenantView";
import SignIn from "./Components/SignIn/SignIn";
import SignOut from "./Components/SignOut/SignOut";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Welcome/Welcome";
import Dashboard from "./Components/Dashboard/Dashboard";
import StripeForm from "./Components/StripeForm/StripeCard";
import API from "./Utilities/API";
import { withCookies, useCookies } from 'react-cookie';
import AddBill from "./Components/AddBill/AddBill";
import ManageAnnouncements from "./Components/ManageAnnouncements/ManageAnnouncements";
import ManageProperties from "./Components/ManageProperties/ManageProperties";
import ManagePayments from "./Components/ManagePayments/ManagePayments";
import ManageLeases from "./Components/ManageLeases/ManageLeases";
import ManageTickets from "./Components/ManageTickets/ManageTickets";

class App extends Component {

  state = {

    //currentUser
    userEmail: "",
    userId: "",
    roles: [],
    //signin
    email: "",
    password: "",
    redirect: false,
    signOutSuccessful: false,
    //register
    newEmail: "",
    newRole: "",
    password1: "",
    password2: "",
    successfulRegistration: false,
    //create ticket
    ticketSubject: "",
    ticketLocation: "",
    ticketDescription: "",
    //property
    PropertyAddress: "",
    managers: [],
    //lease
    tenants: [],
    rate: "",
    secDep: "",
    misc: "",
    miscFees:[],
    miscFee: "",
    dueDate: "",
    moveIn: "",
    moveOut: "",
    //Create bill
    rent: "",
    repair: "",
    repairFee: "",
    billDue: "",
    billStart: "",
    billEnd: "",
    //announcements
    announceTitle: "",
    announceDescription: "",
    //sign out
    userSignedIn: false,


  };

  componentDidMount() {

    API.checkAuth(this.props.allCookies.token)
      .then(resp => {
        console.log(resp.data);
        const data = resp.data.roles;
        this.setState({
          userEmail: resp.data.email,
          userId: resp.data.id,
          roles: data,
          userSignedIn: true
        })
      })
      .catch(err => {
        console.log(err.status);
        if (this.props.allCookies.token === undefined) {
          this.setState({ userSignedIn: false });
        }
      })
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  };


  signOut = () => {
    console.log(this.state.userSignOut);

    this.props.cookies.remove("token");
    this.setState({
      userSignedIn: false
    })
  }

  registerUser = () => {
    if (
      this.state.password1 === this.state.password2 &&
      this.state.newEmail !== '' &&
      this.state.newRole !== '' &&
      this.state.password1.length > 2
    ) {
      const newUser = {
        email: this.state.newEmail,
        password: this.state.password1,
        role: this.state.newRole
      }
      //console.log(newUser);
      API.registerUser(newUser)
        .then(resp => {
          console.log(resp)
          this.setState({
            successfulRegistration: true
          })
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
      .then(resp => {
        console.log(resp);
        this.setState({
          userEmail: resp.data.email,
          userId: resp.data.userID,
          roles: resp.data.roles,
          userSignedIn: true
        })

        //this.setState({ redirect: true })

      })
      .catch(err => console.log(`ERROR: ${err}`));

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

  createProp = () => {
    const managers = this.state.managers;
    const owner = this.state.userId;
    const address = this.state.PropertyAddress;
    function getManagerIds(cb) {
      const managerIds = [];

      managers.forEach((manager, i) => {
        console.log(manager);
        const email = { email: manager }
        //console.log(managers.length);
        //console.log(i);

        API.getUserByEmail(email)
          .then(resp => {

            console.log(`RESP MOFO:`);
            console.log(resp.data);
            managerIds.push(resp.data[0]._id);
            if (i + 1 === managers.length) {
              cb(managerIds);
            }
          })

          .catch(err => console.log(err))


      });
      console.log(managerIds);


    }
    function createProperty(managerIds) {
      const Property = {
        owner: owner,
        address: address,
        managers: managerIds,
        isVacant: true
      }
      console.log(Property)
      API.createProp(Property)
        .then(resp => {
          console.log(resp);
          this.setState({
            PropertyAddress: "",
            managers: [],


          })
        })
        .catch(err => console.log(err))
    }
    getManagerIds(createProperty);

  }

  createLease = () => {
    
    const rateCurrency =
      parseFloat(this.state.rate.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const securityDep =
      parseFloat(this.state.secDep.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const miscPay =
      parseFloat(this.state.secDep.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const tenants = this.state.tenants;
    const misc = this.state.misc;
    const dueDate = this.state.dueDate;
    const moveIn = this.state.moveIn;
    const moveOut = this.state.moveOut;
    const feeArr = this.state.miscFees;
    function getTenantIds(cb) {
      
      const tenantIds = [];
      console.log(`tenants: ${tenants}`)
      tenants.forEach((tenant, i) => {
        console.log(tenant);
        const email = { email: tenant }
        //console.log(tenants.length);
        //console.log(i);

        API.getUserByEmail(email)
          .then(resp => {

            console.log(`RESP MOFO:`);
            console.log(resp.data);
            tenantIds.push(resp.data[0]._id);
            if (i + 1 === tenants.length) {
              cb(tenantIds);
            }
          })

          .catch(err => console.log(err))


      });
      console.log(tenantIds);


    }
    function createLeaseObj(tenantIds) {
      console.log("working");
      const Lease = {
        tenants: tenantIds,
        rate: rateCurrency,
        secDep: securityDep,
        miscStuff: feeArr,
        dueDate: dueDate,
        moveIn: moveIn,
        moveOut: moveOut
      }
      console.log(Lease);
      API.createLease(Lease)
        .then(resp => {
          console.log("lease made successfully")
          console.log(resp)
        })
        .catch(err => console.log(err))
    }

    getTenantIds(createLeaseObj);

  }

  createBill = () => {
    const rentCurrency =
      parseFloat(this.state.rent.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const repairFee =
      parseFloat(this.state.repairFee.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const tenants = this.state.tenants;
    const repair = this.state.repair;
    const billDue = this.state.billDue;
    const billStart = this.state.billStart;
    const billEnd = this.state.billEnd;
    function getTenantIds(cb) {
      const tenantIds = [];

      tenants.forEach((tenant, i) => {
        console.log(tenant);
        const email = { email: tenant }
        //console.log(tenants.length);
        //console.log(i);

        API.getUserByEmail(email)
          .then(resp => {

            console.log(`RESP MOFO:`);
            console.log(resp.data);
            tenantIds.push(resp.data[0]._id);
            if (i + 1 === tenants.length) {
              cb(tenantIds);
            }
          })

          .catch(err => console.log(err))


      });
      console.log(tenantIds);


    }
    function createBillObj(tenantIds) {

      const Bill = {
        tenants: tenantIds,
        rent: rentCurrency,
        repair: repair,
        repairFee: repairFee,
        billDue: billDue,
        billStart: billStart,
        billEnd: billEnd
      }
      console.log(Bill);
      API.createBill(Bill)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    getTenantIds(createBillObj);

  }


  createAnnounce = () => {
    const announce = {
      creator: this.state.userId,
      announceTitle: this.state.announceTitle,
      announceDescription: this.state.announceDescription
    }
    API.createAnnounce(announce)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }



  handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target.name;
    if (form === "register") {
      this.registerUser();
    } else if (form === "signIn") {
      this.signInUser();
    } else if (form === "addNewProperty") {
      console.log(event.target.name)
      this.createProp();
      console.log(this.state.PropertyAddress);
      console.log(this.state.tenants);
    } else if (form === "addNewLease") {
      this.createLease();
      console.log(event.target.name)
    } else if (form === "addBill") {
      this.createBill();
      console.log(event.target.name)
    } else if (form === "newTicket") {
      console.log(event.target.name);
      this.createTicket();
    } else if (form === "newAnnounce") {
      console.log(event.target.name);
      this.createAnnounce();
    }

  };

  render() {

    return (

      <Router>
        <div className="container-fluid with-fixed-nav">
          <Navbar signOut={this.signOut} state={this.state} />
          {/* <Sidebar signOut={this.signOut} state={this.state} /> */}

          <Route exact path="/" render={(routeProps) => {
            const signedIn = this.state.userSignedIn;
            if (signedIn === true) return <Redirect to={{ pathname: "/dashboard" }} />
            else return <Redirect to={{ pathname: "/welcome" }} />
          }}
          />

          <Route exact path="/welcome" render={(routeProps) => (<Welcome {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
          />

          <Route exact path="/dashboard" render={(routeProps) => (<Dashboard {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
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

          <Route exact path="/managePayments" render={(routeProps) => (<ManagePayments {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
          />
          <Route exact path="/manageProperties" render={(routeProps) => (<ManageProperties {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
          />

          <Route exact path="/manageLeases" render={(routeProps) => (<ManageLeases {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
          />

          <Route exact path="/manageTickets" render={(routeProps) => (<ManageTickets {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
          />

          <Route exact path="/manageAnnouncements" render={(routeProps) => (<ManageAnnouncements {...routeProps}
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

          <Route exact path="/signOut" render={(routeProps) => (<SignOut {...routeProps}
            state={this.state}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />)}
          />

          <Footer />
        </div>
      </Router>

    );
  }
}

export default withCookies(App);
