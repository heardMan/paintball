import React, { Component } from "react";
import AddBill from "../AddBill/AddBill";

class ManagePayments extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                ManagePayments
                <AddBill 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />
                    
                </div>

                </div>
           

        );
    }
}

export default ManagePayments;