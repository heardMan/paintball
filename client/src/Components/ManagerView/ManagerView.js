import React, {Component} from "react";
import AddProperty from "../AddProperty/AddProperty";
import AddLease from "../AddLease/AddLease";

class ManagerView extends Component {
    render(){
        return(
            <div>
                <AddProperty 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />

            </div>
        );
    }
}

export default ManagerView;