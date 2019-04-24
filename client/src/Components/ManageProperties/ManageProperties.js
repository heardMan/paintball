import React, { Component } from "react";
import AddProperty from "../AddProperty/AddProperty";
import ViewManagedProperties from "../ViewManagedProperties/ViewManagedProperties";


class ManageProperties extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                ManageProperties

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