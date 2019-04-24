import React, { Component } from "react";

import AddLease from "../AddLease/AddLease";
class ManageLeases extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                <AddLease
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} />
                    
                </div>

                </div>
           

        );
    }
}

export default ManageLeases;