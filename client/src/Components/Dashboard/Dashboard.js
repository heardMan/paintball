import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LeasesSummaryCard from "../LeasesSummary/LeasesSummary";
import TicketsSummaryCard from "../TicketsSummary/TicketsSummary";
import PropertiesSummaryCard from "../PropertiesSummary/PropertiesSummary";
import PaymentsSummaryCard from "../PaymentsSummary/PaymentsSummary";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="row bg-light">
                    <div className="col-12 my-3 text-center"><h1>Welcome to the dashbord!</h1></div>
                    <div className="col-12 my-3 text-center">
                    <div className="card rounded-0">
                        <h1>Exciting Announcements</h1>
                    </div>
                    </div>
                    <div className="col-3">
                    
                    
                    
                    <PaymentsSummaryCard />
                    </div>
                    <div className="col-3">
                    <TicketsSummaryCard />
                    </div>
                    <div className="col-3">
                    <PropertiesSummaryCard />
                    </div>
                    <div className="col-3">
                    <LeasesSummaryCard />
                    </div>

                    <div className="col-12 my-3 text-center">
                    <div className="card rounded-0">
                        <h1>Intersting Info...</h1>
                    </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Dashboard;