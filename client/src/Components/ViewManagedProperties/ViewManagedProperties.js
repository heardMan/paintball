import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../Utilities/API";
class ViewManagedProperties extends Component {
    
    redirect = event =>{
        console.log(event.target.id.split("-")[1]);
        return(
            <Redirect to={{ pathname: "/" }}/>
        );
    }
    render(){
        console.log(this.props.state.managedProperties);
        return(
            <ul className="list-group">
                {this.props.state.managedProperties.map((property,i)=>{
                    return(<li key={i}
                                id={`property-${i}`} 
                                className="list-group-item"
                                onClick={this.redirect}>
                            {property.address}
                    </li>)
                })}
            </ul>
        );
    }
}

export default ViewManagedProperties;