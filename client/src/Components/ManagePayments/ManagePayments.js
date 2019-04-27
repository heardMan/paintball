import React, { Component } from "react";
import AddBill from "../AddBill/AddBill";
import ViewTenantPayments from "../ViewTenantPayments/ViewTenantPayments";
import "./ManagePayments.css";

class ManagePayments extends Component {
    render() {
        return (
<div>
            <div className="row">
                    <div className="col col-md-8 mx-auto shadow managePayments_card">
                       
                        <ViewTenantPayments
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange}/>
                            
                    </div>

                </div>
            
                <div className="row">
                    <div className="col col-md-8 mx-auto shadow managePayments_card">
                        
                        <AddBill 
                            state={this.props.state}
                            handleFormSubmit={this.props.handleFormSubmit}
                            handleInputChange={this.props.handleInputChange}
                        />
                            
                    </div>

                </div>
           
                </div>
        );
    }
}

export default ManagePayments;