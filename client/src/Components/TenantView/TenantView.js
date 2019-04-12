import React, {Component} from "react";
import AddTicket from "../AddTicket/AddTicket"

class TenantView extends Component {
    render(){
        const tenant = this.props.state.roles.indexOf("tenant")>-1? true: false;
        if(tenant){
        return(
            <div>
                <AddTicket 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />
            </div>
        );
    } else {
        return(<div><img src="https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif" className="img-fluid"/></div>)
    }
    }
}

export default TenantView;