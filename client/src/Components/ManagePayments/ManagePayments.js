import React, { Component } from "react";
import AddBill from "../AddBill/AddBill";
import "./ManagePayments.css";

class ManagePayments extends Component {
    render() {
        return (
            
                <div className="row">
                    <div className="col col-md-8 mx-auto shadow managePayments_card">
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