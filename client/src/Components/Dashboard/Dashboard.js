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
            
                
                <div className="row bg-light">
                    <div className="col-12 my-3 text-center"><h1>Welcome to the dashbord!</h1></div>
                    <div className="col-12 my-3 text-center">
                    <div className="card rounded-0">
                    <div className="card-title"></div>
                    <div className="card-body">
                    <ViewAnnouncementsDash
                    state={this.props.state}
                    />
                    </div>
                    <div className="card-footer">
                    <a href="/manageAnnouncements"><h6>Manage Announcements</h6></a>
                    </div>
                        

                    </div>
                    </div>
                    <div className="col-3">
                    
                    
                    
                    <PaymentsSummaryCard 
                    state={this.props.state}
                    />
                    </div>
                    <div className="col-3">
                    <TicketsSummaryCard 
                    state={this.props.state}
                    />
                    </div>
                    <div className="col-3">
                    <PropertiesSummaryCard 
                    state={this.props.state}
                    />
                    </div>
                    <div className="col-3">
                    <LeasesSummaryCard 
                    state={this.props.state}
                    />
                    </div>

                    <div className="col-12 my-3 text-center">
                    <div className="card rounded-0">
                        <h1>Intersting Info...</h1>
                    </div>
                    </div>

                </div>
            

        );
    }
}

export default Dashboard;