import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import API from "../../Utilities/API";
import AddLease from "../AddLease/AddLease";
import "./addProperty.css";

class AddProperty extends Component {
    state = {
        allManagers: [],
        managers: [],
        showResults: false
    }

    addSelected = event => {
        event.preventDefault();
        console.log(event.target.id);
        let arr = [];
        let oldManagers = this.props.state.managers;
        oldManagers.forEach(manager => {
            arr.push(manager);

        });
        arr.push(event.target.id);
        this.setState({
            managers: arr
        });
        this.props.state.managers.push(event.target.id);
        console.log(this.props.state);

    }
    removeManager = event => {
        console.log(event.target.id.split("-")[1])
        let removed = this.props.state.managers.filter((manager, i) => {
            return manager !== event.target.id.split("-")[1];
        });
        console.log(`REMOVED: ${removed}`);
        this.setState({
            managers: removed
        })
        this.props.state.managers = removed;

        console.log(this.props.state.managers);
    }
    componentDidMount() {
        API.getManagers()
            .then(resp => {
                const arr = [];

                resp.data.forEach(user => {
                    arr.push(user.email);
                })

                this.setState({
                    allManagers: arr
                })
                console.log(this.state.allManagers);
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
         if(this.props.state.roles.indexOf("manager") < 0) {
            return(null)
        } else {
        const managers = this.props.state.managers;
        return (
            <div className="universal_card shadow">

            <div className="col">
            <h5>Add Property</h5>
            </div>
            <div className="card-body">
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
                            <ul className="list-group mb-3">
                                {managers.map((manager,i) => {
                                    if(manager === this.props.state.userEmail){
                                        return null
                                    } else {

                                    
                                    return (
                                        <li key={i} className="list-group-item">
                                            <span>
                                                    {manager}
                                                </span>
                                                <span>
                                                    <button name="removeManager" type="button" onClick={this.removeManager} class="close" aria-label="Close">
                                                        <span id={`remove-${manager}`} aria-hidden="true">&times;</span>
                                                    </button>
                                                </span>
                                            
                                        </li>
                                    );
                                }
                                })}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-11">

                                <span>
                                    <AutoComplete
                                        suggestions={this.state.allManagers}
                                        addSelected={this.addSelected}
                                    />
                                </span>
                            </div>
                            <div className="col-1"></div>
                        </div>

                    </div>
                    
                    <button 
                        onClick={this.props.handleFormSubmit} 
                        name="addNewProperty" 
                        type="submit" 
                        className="btn addProperty_btn">Submit</button>
                </form>
                </div>

                {/* <div>
                    <button onClick={this.onClick1}>Add Lease</button>
                    {this.state.showResults ? <AddLease
                        state={this.props.state}
                        handleFormSubmit={this.props.handleFormSubmit}
                        handleInputChange={this.props.handleInputChange} /> : null}
                </div> */}
            </div>
        );
    }
    }
}
export default AddProperty;