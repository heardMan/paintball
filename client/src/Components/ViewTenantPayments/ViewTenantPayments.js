import React, { Component } from "react";
import StripeForm from "../StripeForm/StripeCard";
import API from "../../Utilities/API";

class ViewTenantPayments extends Component {
    state={
        
    }
    
    getPropertyNames = () =>{
        
    }
    render(){
        if (this.props.state.roles.indexOf("tenant") < 0){
            
            return(null)
        } 
        else {

        console.log(this.props.state)

        return (
            <div className="col-12 universalCard">
            <div className="universalCard card shadow">
            <div className="card-title">
            <h5>Manage Payments -for tenants</h5>
            </div>
            <div className="card-body universal_card">
            <div className="row">

            <div className="col-4">Due Date</div>
                            <div className="col-4">Address</div>
                            <div className="col-4"></div>
            <div className="col-12">
                <ul className="list-group">
                    {this.props.state.payments.map((payment, i) => {
                        return (<li key={i}
                            className="list-group-item rounded-0"
                        >
                            <div className="row">
                            
                            <div className="col-4 ">
                                {payment.dueDate.toString().split("T")[0]}
                                
                                
                                </div>
                                <div className="col-4">
                                    {this.props.state.leasedProperties.map(property=>{
                                        if(property._id === payment.property[0]){
                                            return (property.address)
                                        }
                                    })}
                                </div>
                                <div className="col-4 float-right">
                                <StripeForm
                                paymentID={payment._id}
                                state={this.props.state}
                                />
                                </div>
                            </div>


                        </li>)

                    })}
                </ul>
                </div></div>
                </div>
            </div>
            </div>
        );
                }
    }
}

export default ViewTenantPayments;