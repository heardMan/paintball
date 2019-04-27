import React, { Component } from "react";
import "./ViewAssignedTickets.css";

class ViewAssignedTickets extends Component {
    render(){
        return(
            <div className="universal_card shadow">
                <div className="card-title">
                <h5>Manage Assigned Tickets - for managers</h5>
                </div>
                <div className="card-body">
                <ul className="list-group">
                <li className="list-group-item">
                <div className="row">
                                <div className="col-6">
                                    Assigned Ticket Title
                                </div>
                                <div className="col-6">
                                    <a className="float-right" href="/manageAssignedTicket">Manage</a>
                                </div>
                            </div>

                </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default ViewAssignedTickets;