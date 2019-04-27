import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../Utilities/API";
class ViewBill extends Component {
    state = {
        redirect: false
    }
    setViewBill = event => {
        const propertyEnum = event.target.id.split("-")[1];
        console.log(propertyEnum);
        console.log(this.props.state.managedProperties[propertyEnum]);
        this.props.state.currentViewProperty = this.props.state.managedProperties[propertyEnum];
        this.props.state.managedPropertyRedirect = true;
        this.setState({
            redirect: true
        })
        console.log(this.props.state);
    }

    render() {
        console.log(this.props.state.managedProperties);
        if (this.props.state.managedPropertyRedirect === true) {
            return <Redirect to={{ pathname: "/manageProperty", info: this.props.state.currentViewProperty }} />
        } else {
            return (
                <div className="card rounded-0 my-3 p-3">
                <div className="card-title">
                <h5>Manage Bills -for managers</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {this.props.state.managedProperties.map((property, i) => {
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
                                            onClick={this.setViewBill}> Manage</button>
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

export default ViewBill;