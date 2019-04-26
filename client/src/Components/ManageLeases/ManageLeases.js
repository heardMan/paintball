import React, { Component } from "react";
import AddLease from "../AddLease/AddLease";
import "./ManageLeases.css";

class ManageLeases extends Component {
    render() {
        return (
            
                <div className="row">
                    <div className="col col-md-8 mx-auto shadow manageLeases_card">

                        <h1>Manage Leases</h1>
                        <AddLease
                            state={this.props.state}
                            handleFormSubmit={this.props.handleFormSubmit}
                            handleInputChange={this.props.handleInputChange} 
                        />
                    </div>
                </div>
        );
    }
}

export default ManageLeases;