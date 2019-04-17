import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import API from "../../Utilities/API";
import AddLease from "../AddLease/AddLease";

class AddProperty extends Component {
    state = {
        autoCompleteUsers: [],
        newManagers: [], 
        showResults: false
    }

    addSelected = event => {
        event.preventDefault();
        console.log(event.target.id);
        let arr = [];
        let oldManagers = this.state.newManagers;
        oldManagers.forEach(manager => {
            arr.push(manager);

        });
        arr.push(event.target.id);
        this.setState({
            newManagers: arr
        });
       this.props.state.managers.push(event.target.id);
      console.log( this.props.state);
        
    }
    removeManager = event => {
        console.log(event.target.id.split("-")[1])
        let removed = this.state.newManagers.filter((manager,i)=>{
            return manager !== event.target.id.split("-")[1];
        });
        console.log(removed);
        this.setState({
            newManagers: removed
        })
        
        console.log(this.state.newManagers);
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
    onClick1 = event => {
        event.preventDefault();
        console.log(this.state.showResults)
        
        this.setState({
             showResults: true 
            });
    }


    render() {
        const managers = this.state.newManagers;
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" name="PropertyAddress" onChange={this.props.handleInputChange} value={this.props.state.PropertyAddress} className="form-control" id="PropertyAddress" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <div className="row">
                        <div className="col-12">
                            Add Managers
                        </div>
                            <div className="col-12">
                                {managers.map((manager) => {

                                    return (
                                        <div className="card">
                                        <div className="card-title">
                                        <span>
                                                <button name="removeManager"  type="button" onClick={this.removeManager} class="close" aria-label="Close">
                                                    <span id={`remove-${manager}`} aria-hidden="true">&times;</span>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            <span>
                                                {manager}
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
                <button onClick={this.onClick1}>Add Lease</button>
                { this.state.showResults ? <AddLease /> : null }
                
            </div>
            </div>
        );
    }
}
export default AddProperty;