import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import API from "../../Utilities/API";
import AddLease from "../AddLease/AddLease";

class AddProperty extends Component {
    state = {
        autoCompleteUsers: [],
        newTenants: [], 
        showResults: false
    }

    addSelected = event => {
        event.preventDefault();
        console.log(event.target.id);
        let arr = [];
        let oldTenants = this.state.newTenants;
        oldTenants.forEach(tenant => {
            arr.push(tenant);
        });
        arr.push(event.target.id);
        this.setState({
            newTenants: arr
        })

        
    }
    removeTenant = event => {
        console.log(event.target.id.split("-")[1])
        let removed = this.state.newTenants.filter((tenant,i)=>{
            return tenant !== event.target.id.split("-")[1]
        });
        this.setState({
            newTenants: removed
        })
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
    onClick= event => {
        event.preventDefault();
        console.log(this.state.showResults)
        
        this.setState({
             showResults: true 
            });
    }
    render() {
        const tenants = this.state.newTenants;
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="propertyAddress" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12">
                                {tenants.map((tenant) => {

                                    return (
                                        <div className="card">
                                        <div className="card-title">
                                        <span>
                                                <button name="removeTenant"  type="button" onClick={this.removeTenant} class="close" aria-label="Close">
                                                    <span id={`remove-${tenant}`} aria-hidden="true">&times;</span>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            <span>
                                                {tenant}
                                            </span>

                                        </div>
                                            
                                            
                                        </div>
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

                <div>
                <button onClick={this.onClick}>Add Lease</button>
                { this.state.showResults ? <AddLease /> : null }
                
            </div>
            </div>
        );
    }
}
export default AddProperty;