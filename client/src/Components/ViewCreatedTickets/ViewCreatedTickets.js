import React, { Component } from "react";
import "./ViewCreatedTickets.css";

class ViewManagedLeases extends Component {
    render(){
        return(
            <div className="universal_card shadow">
                <div className="card-title">
                <h5>Manage Created Tickets - for tenants</h5>
                </div>
                <div className="card-body">
                <ul className="list-group">
                <li className="list-group-item">
                <div className="row">
                                <div className="col-6">
                                    Created Ticket Title
                                </div>
                                <div className="col-6">
                                    <a className="float-right" href="/manageCreatedTicket">Manage</a>
                                </div>
                            </div>
                </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default ViewManagedLeases;