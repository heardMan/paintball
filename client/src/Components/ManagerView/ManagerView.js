import React, {Component} from "react";
import AddProperty from "../AddProperty/AddProperty";

class ManagerView extends Component {
    componentDidMount(){
        console.log(this.props.state.roles);

      }
    render(){
        const manager = this.props.state.roles.indexOf("manager")>-1? true: false;
        if(manager){
        return(
            <div>
                <AddProperty 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />

            </div>
        );
    } else{
        return(<div><img src="https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif" className="img-fluid"/></div>)
    }
    }
}

export default ManagerView;