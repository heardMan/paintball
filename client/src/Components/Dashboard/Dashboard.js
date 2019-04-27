import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LeasesSummaryCard from "../LeasesSummary/LeasesSummary";
import TicketsSummaryCard from "../TicketsSummary/TicketsSummary";
import PropertiesSummaryCard from "../PropertiesSummary/PropertiesSummary";
import PaymentsSummaryCard from "../PaymentsSummary/PaymentsSummary";
import ViewAnnouncementsDash from "../ViewAnnouncementsDash/ViewAnnouncementsDash";

class Dashboard extends Component {
    
    render() {
        console.log(this.props.state)
        return (
            
                
                <div className="row col mx-auto universalCard shadow-lg">
                    <div className="col universal_card shadow">
                        <h1 className="text-center">Welcome to the Dashboard!</h1>

                        <hr></hr>
                        <div className="row text-center">
                            <h4 className="col-12 text-center py-3">Announcements</h4>
                            <div className="col-12 text-center">
                                <a href="/manageAnnouncements"><h6 className="btn universal_btn border border-secondary mr-3">Manage Announcements</h6></a>
                                <a href="/viewAnnouncement"><h6 className="btn universal_btn border border-secondary mr-3">View Announcements</h6></a>
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-12 col-md-3">
                            <PaymentsSummaryCard />
                            </div>
                            <div className="col-12 col-md-3">
                            <TicketsSummaryCard />
                            </div>
                            <div className="col-12 col-md-3">
                            <PropertiesSummaryCard />
                            </div>
                            <div className="col-12 col-md-3">
                            <LeasesSummaryCard />
                            </div>
                        </div>
                        
                    </div>


                    {/* <div className="col universal_card shadow">
                    <div className="col-12 my-3 text-center"><h1>Welcome to the dashbord!</h1></div>
                    <div className="col-12 my-3 text-center">
                    <div className="card rounded-0">
                    <div className="card-title"></div>
                    <div className="card-body">
                    <ViewAnnouncementsDash />
                    </div>

                    <div className="card-footer">
                    <a href="/manageAnnouncements"><h6 className="btn universal_btn border border-secondary mb-3">Manage Announcements</h6></a>
                    </div>
                        

                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                        <PaymentsSummaryCard />
                        </div>
                        <div className="col-12 col-md-3">
                        <TicketsSummaryCard />
                        </div>
                        <div className="col-12 col-md-3">
                        <PropertiesSummaryCard />
                        </div>
                        <div className="col-12 col-md-3">
                        <LeasesSummaryCard />
                        </div>
                    </div>

                    <div className="col-12 my-3 text-center">
                    <div className="card rounded-0">
                        <h1>Intersting Info...</h1>
                    </div>
                    </div>
                    </div> */}
                </div>
            

        );
    }
}

export default Dashboard;