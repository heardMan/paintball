import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import API from "../../Utilities/API";
import { runInThisContext } from "vm";
import "./ViewManagedLeases.css";


class ViewManagedLeases extends Component {
    state = {
        redirect: false
    }

    setViewProperty = event => {
        const propertyEnum = event.target.id.split("-")[1];
        console.log(propertyEnum);
        console.log(this.props.state.managedLeases[propertyEnum]);
        this.props.state.currentViewManagedLease = this.props.state.managedLeases[propertyEnum];
        this.props.state.managedLeaseRedirect = true;
        this.setState({
            redirect: true
        })
        console.log(this.info);
    }
    render(){
        console.log(this.props.state);

        if(this.state.redirect === true){
            return <Redirect to={{ pathname: "/manageLeaseManager", info: this.props.state.currentViewManagedLease }} />
        } 
        else if(this.props.state.roles.indexOf("manager") < 0) {
            return(null)
        } 
        else {

        
        return(
            <div className="col universal_card shadow">
                <div className="card-title">
                <h5>Manage Leases</h5>
                </div>
                <div className="card-body">
                <ul className="list-group">
                {this.props.state.managedLeases.map((lease, i) => {
                    console.log(lease._id)
                    let address;
                            this.props.state.managedProperties.forEach((property,i)=>{
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
                                    Lease - Manager View
                                </div>
                                <div className="col-6">
                                    <a className="float-right" href="/manageLeaseManager">Manage</a>
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

export default ViewManagedLeases;