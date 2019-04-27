import React, { Component } from "react";
import "./ViewManagedLeases.css";

class ViewManagedLeases extends Component {
    render(){
        return(
            <div className="col universal_card shadow">
                <div className="card-title">
                <h5>Manage Leases - only for managers</h5>
                </div>
                <div className="card-body">
                <ul className="list-group">
                <li className="list-group-item">
                <div className="row">
                                <div className="col-6">
                                    Lease - Manager View
                                </div>
                                <div className="col-6">
                                    <a className="float-right" href="/manageLeaseManager">Manage</a>
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