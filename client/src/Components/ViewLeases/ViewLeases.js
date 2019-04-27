import React, { Component } from "react";
import "./ViewLeases.css";

class ViewLeases extends Component {
    render(){
        return(
            <div className="col shadow universal_card">
                <div className="card-title">
                    <h5>Your Leases - only for tenants</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                    <li className="list-group-item">
                <div className="row">
                    <div className="col-6">
                        Lease -Tenant View
                    </div>
                    <div className="col-6">
                        <a className="float-right" href="/manageLeaseTenant">Manage</a>
                    </div>
                </div>
                </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default ViewLeases;