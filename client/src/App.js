import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ManagerView from "./Components/ManagerView/ManagerView";
import TenantView from "./Components/TenantView/TenantView";
import SignIn from "./Components/SignIn/SignIn";
import SignOut from "./Components/SignOut/SignOut";
import Register from "./Components/Register/Register";
//import Footer from "./Components/Footer/Footer";
import Welcome from "./Components/Welcome/Welcome";
import Dashboard from "./Components/Dashboard/Dashboard";
//import StripeForm from "./Components/StripeForm/StripeCard";
import API from "./Utilities/API";
import { withCookies } from 'react-cookie';
//import AddBill from "./Components/AddBill/AddBill";
import ManageAnnouncements from "./Components/ManageAnnouncements/ManageAnnouncements";
import ManageAnnouncementPage from "./Components/ManageAnnouncementPage/ManageAnnouncementPage";
import ViewAnnouncement from "./Components/ViewAnnouncement/ViewAnnouncement";
import ManageProperties from "./Components/ManageProperties/ManageProperties";
import ManagePropertyPage from "./Components/ManagedPropertyPage/ManagedPropertyPage";
import ManageLeasedProperty from "./Components/ManageLeasedProperty/ManageLeasedProperty";
import ManageLeaseManager from "./Components/ManageLeaseManager/ManageLeaseManager";
import ManageLeaseTenant from "./Components/ManageLeaseTenant/ManageLeaseTenant";
import ManagePayments from "./Components/ManagePayments/ManagePayments";
import ManageLeases from "./Components/ManageLeases/ManageLeases";
import ManageTickets from "./Components/ManageTickets/ManageTickets";
import ManageAssignedTicket from "./Components/ManageAssignedTicket/ManageAssignedTicket";
import ManageCreatedTicket from "./Components/ManageCreatedTicket/ManageCreatedTicket";


class App extends Component {

  state = {

    //currentUser
    userEmail: "",
    userId: "",
    roles: [],
    
    managedProperties: [],
    leasedProperties: [],
    ownedPropertyList: [], 
    currentViewProperty: {},
    currentViewLeasedProperty: {},
    currentViewManagedLease: {},
    currentViewTenantLease: {},
    currentViewCreatedTicket: {},
    currentViewAssignedTicket: {},
    menuToggle: false,
    lastPage: "",
    payments: [],
    paymentsManager:[],
    createdTickets: [],
    assignedTickets: [],
    managedLeases: [],
    tenantLeases: [],
    ownedProperties: [],
    
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
    miscFees: [],
    miscFee: "",
    dueDate: "",
    moveIn: "",
    moveOut: "",
    propertyToLease:"",
    //Create bill
    rent: "",
    repair: "",
    repairFee: "",
    repairFees: [],
    billDue: "",
    billStart: "",
    billEnd: "",
    //announcements
    announceTitle: "",
    announceDescription: "",
    //sign out
    userSignedIn: "",
    //redirects
    managedPropertyRedirect: false,
    leasedPropertyRedirect: false,
    managedLeaseRedirect: false,
    tenantLeaseRedirect: false,


  };

  componentDidMount() {

    API.checkAuth(this.props.allCookies.token)
      .then(resp => {
        console.log(resp.data);
        const data = resp.data.roles;
        const ownedPropertyList = [];
        resp.data.owned_properties.map((property,i)=>{
          console.log(property);

          ownedPropertyList.push(property.address);
        })
        this.setState({
          userEmail: resp.data.email,
          userId: resp.data.id,
          roles: data,

          payments:resp.data.payments,
          paymentsManager:resp.data.paymentsManager,

          createdTickets: resp.data.createdTickets,
          assignedTickets: resp.data.assignedTickets,

          managedLeases: resp.data.managed_leases,
          tenantLeases: resp.data.leases,

          ownedPropertyList: ownedPropertyList,
          ownedProperties: resp.data.owned_properties,
          managedProperties: resp.data.managed_properties,
          leasedProperties: resp.data.leased_properties,
          
          userSignedIn: true
        })

        console.log(this.state);

      })
      .catch(err => {
        console.log(err.status);
        if (this.props.allCookies.token === undefined) {
          this.setState({ userSignedIn: false });
        }
      })

  }

  handleInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    //const value = event.target.value;
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

  createProperty = () => {

    const managers = this.state.managers;
    const addCurrentUser = managers.indexOf(this.state.userEmail);

    if (addCurrentUser < 0) return managers.push(this.state.userEmail);
    console.log(managers);
    const owner = this.state.userId;
    const address = this.state.PropertyAddress;

    console.log("working");

    const getManagerIds = (cb) => {
      const managerIds = [];

      managers.forEach((manager, i) => {
        console.log(manager);
        const email = { email: manager }

        API.getUserByEmail(email)
          .then(resp => {
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
    const addPropertytoDB = (managerIds) => {
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


        })
        .catch(err => console.log(err))
    }
    getManagerIds(addPropertytoDB);

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
    const property= this.state.propertyToLease;
    let propertyId;
    this.state.ownedProperties.forEach((property,i)=>{
      console.log("ADDRESS:"+property._id)
      console.log("ADDRESS:"+this.state.propertyToLease)

      if(property.address === this.state.propertyToLease){
         console.log(property._id);
         propertyId = property._id; 
      }
      console.log(propertyId);
    })



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
        property: propertyId,
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
    console.log("hello");
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
    const feeArr = this.state.repairFees;
    function getTenantIds(cb) {
      const tenantIds = [];
      console.log("hello 2");
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
        repairStuff: feeArr,
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
      this.createProperty();

      //console.log(this.state);
      // console.log(this.state.PropertyAddress);
      // console.log(this.state.managers);
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
    } else if (form === "setProperty") {
      console.log(form);
      const propertyEnum = event.target.id.split("-")[1];

      console.log("propertyEnum", propertyEnum);
      console.log(this.props.state.managedProperties[propertyEnum]);
      this.setState({
        currentViewProperty: this.state.managedProperties[propertyEnum]
      });
      console.log(this.props.state);
    }

  };

  render() {

    return (

      <Router>
        <div>

          <div name="spacer" style={{ height: "1rem" }}></div>



          <Navbar signOut={this.signOut} state={this.state} handleInputChange={this.handleInputChange} />
          <div className="container-fluid">
            {/* <Sidebar signOut={this.signOut} state={this.state} /> */}

            <Route exact path="/" render={(routeProps) => {
              const signedIn = this.state.userSignedIn;
              console.log(signedIn);
              if (this.state.userSignedIn === true) return <Redirect to={{ pathname: "/dashboard" }} />
              else if (this.state.managedPropertyRedirect === true) return <Redirect to={{ pathname: "/manageProperty", info: this.state.currentViewProperty }} />
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

            <Route exact path="/manageProperty" render={(routeProps) => (<ManagePropertyPage {...routeProps}
              state={this.state}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />)}
            />

            <Route exact path="/manageLeasedProperty" render={(routeProps) => (<ManageLeasedProperty {...routeProps}
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

            <Route exact path="/manageLeaseManager" render={(routeProps) => (<ManageLeaseManager {...routeProps}
              state={this.state}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />)}
            />

            <Route exact path="/manageLeaseTenant" render={(routeProps) => (<ManageLeaseTenant {...routeProps}
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

            <Route exact path="/manageAssignedTicket" render={(routeProps) => (<ManageAssignedTicket {...routeProps}
              state={this.state}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />)}
            />

            <Route exact path="/manageCreatedTicket" render={(routeProps) => (<ManageCreatedTicket {...routeProps}
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

            <Route exact path="/manageAnnouncement" render={(routeProps) => (<ManageAnnouncementPage {...routeProps}
              state={this.state}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />)}
            />

            <Route exact path="/viewAnnouncement" render={(routeProps) => (<ViewAnnouncement {...routeProps}
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
          </div>
          {/* <Footer /> */}
        </div>
      </Router>

    );
  }
}

export default withCookies(App);
