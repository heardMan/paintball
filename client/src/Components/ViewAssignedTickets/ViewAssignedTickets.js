import React, { Component } from "react";

class ViewAssignedTickets extends Component {
    render(){
        return(
            <div className="card rounded-0 p-3 my-3">
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