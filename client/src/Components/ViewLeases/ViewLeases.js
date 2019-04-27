import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./ViewLeases.css";


class ViewLeases extends Component {
    state = {
        redirect: false
    }

    setViewProperty = event => {
        const propertyEnum = event.target.id.split("-")[1];
        console.log(propertyEnum);
        console.log(this.props.state.tenantLeases[propertyEnum]);
        this.props.state.currentViewTenantLease = this.props.state.tenantLeases[propertyEnum];
        this.props.state.managedLeaseRedirect = true;
        this.setState({
            redirect: true
        })
        console.log(this.info);
    }
    render(){


        if(this.state.redirect === true){
            return <Redirect to={{ pathname: "/manageLeaseTenant", info: this.props.state.currentViewTenantLease }} />
        } 
        else if(this.props.state.roles.indexOf("tenant") < 0) {
            return(null)
        } 
        else {
            return(
                <div className="col shadow universal_card">
                    <div className="card-title">

                    <h5>Your Leases</h5>
                    </div>
                    <div className="card-body">
                    <ul className="list-group">
{this.props.state.tenantLeases.map((lease, i) => {
    console.log(lease._id)
    let address;
            this.props.state.leasedProperties.forEach((property,i)=>{
                address = property.address
            })
            console.log(address);
            return (<li key={i}
                className="list-group-item rounded-0"
            >
                <div className="row">
                    <div className="col-6">
                        {address}
                    </div>
                    <div className="col-6 ">
                        <button
                            id={`property-${i}`}
                            name="setProperty"
                            type="submit"
                            className="btn btn-primary float-right"
                            onClick={this.setViewProperty}> Manage</button>
                    </div>
                </div>


            </li>)

        })}

                    {/* <li className="list-group-item">
                    <div className="row">
                                    <div className="col-6">
                                        Lease -Tenant View
                                    </div>
                                    <div className="col-6">
                                    <button
                                                id={`tenantLease-0`}
                                                name="setProperty"
                                                type="submit"
                                                className="btn btn-primary float-right"
                                                onClick={this.setViewProperty}> Manage</button>
                                        
                                    </div>
                                </div>
                    </li> */}
                    </ul>
                    </div>

                </div>
            );
        }
        
    }
}

export default ViewLeases;