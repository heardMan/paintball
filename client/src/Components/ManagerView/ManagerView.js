import React, {Component} from "react";
import AddProperty from "../AddProperty/AddProperty";
import AddAnnouncement from "../AddAnnouncement/AddAnnouncement";

class ManagerView extends Component {
    componentDidMount(){
        console.log(this.props.state.roles);
        

      }
    render(){
        const manager = this.props.state.roles.indexOf("manager")>-1? true: false;
        if(manager){
        return(
            <div>
                <AddAnnouncement 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />
                <AddProperty 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />

            </div>
        );
    } else{
        return(<div><img src="https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif" alt="" className="img-fluid"/></div>)
    }
    }
}

export default ManagerView;