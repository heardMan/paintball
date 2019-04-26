import React, { Component } from "react";
import AddProperty from "../AddProperty/AddProperty";
import ViewManagedProperties from "../ViewManagedProperties/ViewManagedProperties";
import ViewLeasedProperties from "../ViewLeasedProperties/ViewedLeasedProperties";


class ManageProperties extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                <a href="/dashboard"><h4>Back to Dashboard</h4></a>
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