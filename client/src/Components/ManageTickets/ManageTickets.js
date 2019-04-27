import React, { Component } from "react";
import AddTicket from "../AddTicket/AddTicket";
import ViewCreatedTickets from "../ViewCreatedTickets/ViewCreatedTickets";
import ViewAssignedTickets from "../ViewAssignedTickets/ViewAssignedTickets";
import "./ManageTickets.css";

class ManageTickets extends Component {
    render() {
        return (
            
                <div className="col col-md-8 mx-auto shadow-lg universalCard">
                <div className="col-12">
                <a href="/dashboard"><h4 className="btn universal_btn border border-secondary mb-3">Back to Dashboard</h4></a>
                
                </div>
                <div className="col-12">
                <ViewAssignedTickets
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />
                </div>
                <div className="col-12">
                <ViewCreatedTickets
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />
                </div>
                <div className="col-12">


                <AddTicket
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />


                </div>

                </div>
           

        );
    }
}

export default ManageTickets;