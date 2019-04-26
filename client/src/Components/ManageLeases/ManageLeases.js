import React, { Component } from "react";
import AddLease from "../AddLease/AddLease";
import ViewManagedLeases from "../ViewManagedLeases/ViewManagedLeases"
import ViewLeases from "../ViewLeases/ViewLeases";
import "./ManageLeases.css";

class ManageLeases extends Component {
    render() {
        return (
            
                <div className="row">

                        <div className="col col-md-8 mx-auto shadow manageLeases_card">
                                <div className="col">
                                        <a href="/dashboard"><h4 className="btn btn-light border border-secondary mb-3">Back to Dashboard</h4></a>
                                </div>
                                <div className="col-12">
                                <ViewLeases
                                        state={this.props.state}
                                        handleFormSubmit={this.props.handleFormSubmit}
                                        handleInputChange={this.props.handleInputChange} />
                                </div>
                                <div className="col-12">
                                <ViewManagedLeases
                                        state={this.props.state}
                                        handleFormSubmit={this.props.handleFormSubmit}
                                        handleInputChange={this.props.handleInputChange} />
                                </div>
                                <div className="col-12">

                                <AddLease
                                        state={this.props.state}
                                        handleFormSubmit={this.props.handleFormSubmit}
                                        handleInputChange={this.props.handleInputChange} />
                                

                                </div>
                        </div>
                </div>
           

        );
    }
}

export default ManageLeases;