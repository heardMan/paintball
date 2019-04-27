import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LeasesSummaryCard from "../LeasesSummary/LeasesSummary";
import TicketsSummaryCard from "../TicketsSummary/TicketsSummary";
import PropertiesSummaryCard from "../PropertiesSummary/PropertiesSummary";
import PaymentsSummaryCard from "../PaymentsSummary/PaymentsSummary";
import ViewAnnouncementsDash from "../ViewAnnouncementsDash/ViewAnnouncementsDash";

// import { Row, Col, Card, Popup, Button } from "react-bootstrap";

import "./Dashboard.css";


class Dashboard extends Component {
    
    render() {
        console.log(this.props.state)
        return (




<div className="background">
    <div className="header">  


            <div className="jumbotron" >
                 <h1 className="display-4 text-center">Welcome to the Dashboard!</h1>
                 <p className="lead text-center">Announcements </p>
                 <hr className="my-4"/>
                 <div className="row my-2"> 
                  <div className="col-md-4"></div>
                    <div className="col-md-2 mx-auto first-col">
                        <a className="btn btn-primary first_btn btn-lg" href="#" role="button">Learn more</a>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <a className="btn btn-primary second_btn btn-lg" href="#" role="button">Learn more</a>
                   </div>
                   <div className="col-md-4"></div>
                 </div>
             </div>
       
      </div>   

     <div className="body_cards">
         <section className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Control Panel
                        </h2>
                    </div>

            

                 {/* Cards Start Here */}
                    <div className="row firstrow">
                        {/* Payment Summary Card */}
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card__side card__side--front card__side--front-1">
                                 <div className="card__picture card__picture--1">
                                    
                                 </div>
                                 <h4 className="card__heading card__heading--1">
                                    <span className="card__heading-span card__heading-span--1">Payment Summary</span>
                                 </h4>
                                 <div className="card__details card__details--1">
                                    <ul>
                                        <li>Pay Bills</li>
                                        <li>View your Bills</li>
                                    </ul>
                                 </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__info-box">
                                            <p className="card__info-view">Click</p>
                                            <p className="card__info-below">Below</p>
                                        </div>
                                    <a href="/managePayments" className="btn btn-lg">Payments</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tickets Summary Card */}
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                            <div className="card__side card__side--front card__side--front-2">
                            <div className="card__picture card__picture--2">

                                 </div>
                                 <h4 className="card__heading card__heading--2">
                                    <span className="card__heading-span card__heading-span--1">Tickets Summary</span>
                                 </h4>
                                 <div className="card__details card__details--2">
                                    <ul>
                                        <li>View Tickets</li>
                                        <li>Create a Ticket</li>
                                    </ul>
                                 </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__info-box">
                                            <p className="card__info-view">Click</p>
                                            <p className="card__info-below">Below</p>
                                       </div>
                                    <a href="manageTickets" className="btn btn-lg">Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
                    
                 <div className="row secondrow">
                        {/* Properties Summary Card */}
                     <div className="col-md-4 mx-auto">
                         <div className="card">
                            <div className="card__side card__side--front card__side--front-3">
                                <div className="card__picture card__picture--3">

                                 </div>
                                 <h4 className="card__heading card__heading--3">
                                    <span className="card__heading-span card__heading-span--1">Properties Summary</span>
                                 </h4>
                                 <div className="card__details card__details--3">
                                     <ul>
                                        <li>View Properties</li>
                                        <li>Add Properties</li>
                                    </ul>
                                 </div>
                                </div>
                             <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__info-box">
                                            <p className="card__info-view">Click</p>
                                            <p className="card__info-below">Below</p>
                                        </div>
                                        <a href="/manageProperties" className="btn btn-lg">Properties</a>
                                    </div>
                              </div>
                         </div>
                    </div> 

                        {/* Leases Summary Card */}
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                            <div className="card__side card__side--front card__side--front-4">
                              <div className="card__picture card__picture--4">
                                 
                                 </div>
                                 <h4 className="card__heading card__heading--4">
                                    <span className="card__heading-span card__heading-span--1">Lease Summary</span>
                                 </h4>
                                 <div className="card__details card__details--4">
                                    <ul>
                                        <li>View your Lease</li>
                                        <li>Add a Lease</li>
                                    </ul>
                                 </div>
                                </div>
                             <div className="card__side card__side--back card__side--back-4">
                                    <div className="card__cta">
                                        <div className="card__info-box">
                                            <p className="card__info-view">Click</p>
                                            <p className="card__info-below">Below</p>
                                        </div>
                                        <a href="/manageLeases" className="btn btn-lg">Leases</a>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
            </section>  
        </div>  
 </div>

            );

        }


    }

export default Dashboard;