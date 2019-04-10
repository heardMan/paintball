import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import API from "../../Utilities/API";

class AddProperty extends Component {
    state = {
        autoCompleteUsers: [],
        newTenants: []
    }
    
    addSelected = event => {
        event.preventDefault();
        console.log(event.target.id);
        this.state.newTenants.push(event.target.id);
    }
    componentDidMount() {
        API.getUsers()
            .then(resp => {
                const arr = [];
                resp.data.forEach(user => {
                    arr.push(user.email);
                })
                this.setState({
                    autoCompleteUsers: arr
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
                        <input type="text" className="form-control" id="propertyAddress" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12">
                                {this.state.newTenants.map((tenant, i) =>{
                                    console.log(`LOGGING: ${tenant}`);
                                    return(
                                        <div className="card">{tenant}</div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <span>
                                    <AutoComplete
                                        suggestions={this.state.autoCompleteUsers}
                                        addSelected={this.addSelected}
                                    />
                                </span>
                            </div>
                        </div>

                    </div>

                    <button onClick={this.props.handleFormSubmit} name="addNewProperty" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default AddProperty;