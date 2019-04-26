import React, { Component } from "react";
import AddTicket from "../AddTicket/AddTicket"
import "./ManageTickets.css";


class ManageTickets extends Component {
    render() {
        return (
            
                <div className="row">
                    <div className="col col-md-8 mx-auto shadow manageTickets_card">
                        <AddTicket
                            state={this.props.state}
                            handleFormSubmit={this.props.handleFormSubmit}
                            handleInputChange={this.props.handleInputChange} 
                        />
                    </div>
                </div>
        );
    }
}

export default ManageTickets;