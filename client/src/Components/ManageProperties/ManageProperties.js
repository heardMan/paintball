import React, { Component } from "react";
import AddProperty from "../AddProperty/AddProperty";
import ViewManagedProperties from "../ViewManagedProperties/ViewManagedProperties";
import ViewLeasedProperties from "../ViewLeasedProperties/ViewedLeasedProperties";
import "./ManageProperties.css";

class ManageProperties extends Component {
    render() {
        return (
            
                <div className="col col-md-8 mx-auto shadow manageProperties_card">
                <div className="col-12">
                <a href="/dashboard"><h4 className="btn btn-light border border-secondary mb-3">Back to Dashboard</h4></a>
                </div>
                <div className="col-12">
                <ViewLeasedProperties
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />
                </div>
                <div className="col-12">
                

                <ViewManagedProperties
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />
                


                </div>
                <div className="col-12">
                <AddProperty
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />
                </div>

                </div>
           

        );
    }
}

export default ManageProperties;