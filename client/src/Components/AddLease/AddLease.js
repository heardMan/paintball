import React, { Component } from "react";
import API from "../../Utilities/API";
import './AddLease.css';
import SelectBox from './selectBox'

class AddLease extends Component {

    state = {
        autoCompleteUsers: [],
        newTenants: []
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

    render() {
        //let stateTest = this.state.test;
        const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        return (
            <div>
                {/* <form>
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
                    </form> */}

                    <form className="row">
                        <label>Monthly Rate: </label>
                        $<input type="text" name="rate" className="form-control" id="monthlyRate" onChange={this.props.handleInputChange} value={this.props.state.rate} placeholder="1500.00" />
                        <label>Security Deposit: </label>
                        $<input type="text" name="secDep" className="form-control" id="securityDep" onChange={this.props.handleInputChange} value={this.props.state.secDep} placeholder="500.00" />
                        <label>Miscellaneous Fees: </label>
                        <input type="text" name="misc" className="form-control" id="addFee" onChange={this.props.handleInputChange} value={this.props.state.misc} placeholder="Pet Deposit" />
                        $<input type="text" name="miscFee" className="form-control" id="feeAmount" onChange={this.props.handleInputChange} value={this.props.state.miscFee} placeholder="200.00" />
                        <label>Reoccurring Due Date: Rent is due on the  </label>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Day of Month</label>
                            <select class="form-control" name="dueDate" id="dueDate" onChange={this.props.handleInputChange} value={this.props.state.dueDate}>
                            {days.map(day=><option key={day}value={day}>{day}</option>)}
                            </select>
                        </div>
                        <label>of the month.</label>
                        <div>-------------------------------------</div>
                        <div>Move In Date: </div>
                        <div class="form-group row" className="dateBox">
                            <label for="moveIn" class="col-2 col-form-label">Move-In Date</label>
                            <div class="col-10">
                                <input name="moveIn" class="form-control" type="date" id="moveIn" onChange={this.props.handleInputChange} value={this.props.state.moveIn}></input>
                            </div>
                        </div>
                        <div class="form-group row" className="dateBox">
                        <label for="leaseEnd" class="col-2 col-form-label">Lease End Date: </label>
                            <div class="col-10">
                                <input name="moveOut" class="form-control" type="date" id="leaseEnd" onChange={this.props.handleInputChange} value={this.props.state.moveOut}></input>
                            </div>
                        </div>
                        <button onClick={this.props.handleFormSubmit} name="addNewLease" type="submit" className="btn btn-primary">Submit Lease</button>
                    </form>

                    
                   
                    
                
            </div>
        );
    }
}
export default AddLease;