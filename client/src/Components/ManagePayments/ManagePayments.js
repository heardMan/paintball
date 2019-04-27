import React, { Component } from "react";
import AddBill from "../AddBill/AddBill";
import "./ManagePayments.css";

class ManagePayments extends Component {
    render() {
        return (
            
                <div className="col col-md-8 mx-auto universalCard shadow">
                                <div className="col-12">
                    <a href="/dashboard"> <h5 className="btn universal_btn border border-secondary mb-3">Back to Dashboard</h5> </a>
                </div>
                    <div className="col shadow universal_card">
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