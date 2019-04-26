import React, { Component } from "react";
import AddProperty from "../AddProperty/AddProperty";
import ViewManagedProperties from "../ViewManagedProperties/ViewManagedProperties";
import "./ManageProperties.css";


class ManageProperties extends Component {
    render() {
        return (
            
                <div className="row">
                        <div className="col col-md-8 mx-auto shadow manageProperties_card">
                        <h1>Manage Properties</h1>

                        <ViewManagedProperties
                                state={this.props.state}
                                handleFormSubmit={this.props.handleFormSubmit}
                                handleInputChange={this.props.handleInputChange} />
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