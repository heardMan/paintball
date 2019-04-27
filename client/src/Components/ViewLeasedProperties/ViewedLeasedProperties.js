import React, { Component } from "react";
import "./ViewLeasedPropterties.css";

class ViewLeasedProperties extends Component {
    render(){
        return(
            <div className="universal_card shadow">
                <div className="card-title">
                <h5>Manage Leased Properties - for tenants</h5>
                </div>
                <div className="card-body">
                <ul className="list-group">
                <li className="list-group-item">
                <div className="row">
                                <div className="col-6">
                                    Leased Property
                                </div>
                                <div className="col-6">
                                    <a className="float-right" href="/manageLeasedProperty">Manage</a>
                                </div>
                            </div>
                </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default ViewLeasedProperties;