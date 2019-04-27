import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import "./ViewLeasedPropterties.css";


class ViewLeasedProperties extends Component {
    state = {
        redirect: false
    }
    setViewProperty = event => {
        const propertyEnum = event.target.id.split("-")[1];
        console.log(propertyEnum);
        console.log(this.props.state.leasedProperties[propertyEnum]);
        this.props.state.currentViewLeasedProperty = this.props.state.leasedProperties[propertyEnum];
        this.props.state.leasedPropertyRedirect = true;
        this.setState({
            redirect: true
        })
        console.log(this.info);
    }
    render(){


        if(this.state.redirect === true){
            return <Redirect to={{ pathname: "/manageLeasedProperty", info: this.props.state.currentViewLeasedProperty }} />
        } 
        else if (this.props.state.roles.indexOf("tenant") < 0){
            return(null)
        } 
        else {
            return(
                <div className="universal_card shadow">
                    <div className="card-title">
                    <h5>Manage Leased Properties</h5>
                    </div>
                    <div className="card-body">
                    <ul className="list-group">
                    {this.props.state.leasedProperties.map((property, i) => {
                                return (<li key={i}
                                    className="list-group-item rounded-0"
                                >
                                    <div className="row">
                                        <div className="col-6">
                                            {property.address}
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
                    
                    </ul>
                    </div>


                </div>
            );
        }
       
    }
}

export default ViewLeasedProperties;