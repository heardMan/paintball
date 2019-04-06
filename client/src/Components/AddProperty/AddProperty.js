import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import API from "../../Utilities/API";

class AddProperty extends Component {
    state={
        autoCompleteUsers: []
    }
    componentDidMount(){
        API.getUsers()
        .then(resp => {
            const arr = [];
            resp.data.forEach(user=>{
                arr.push(user.email);
            })
            this.setState({
                autoCompleteUsers : arr
            })
            console.log(this.state.autoCompleteUsers);
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" class="form-control" id="propertyAddress"  placeholder="Enter Address"/>
                    </div>
                    <div className="form-group">
                        
                            <AutoComplete
                                suggestions={this.state.autoCompleteUsers}
                            />
                       
                    </div>

                </form>
            </div>
        );
    }
}
export default AddProperty;