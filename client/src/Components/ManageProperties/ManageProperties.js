import React, { Component } from "react";
import AddProperty from "../AddProperty/AddProperty";

class ManageProperties extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                ManageProperties
                <AddProperty 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />
                </div>

                </div>
           

        );
    }
}

export default ManageProperties;