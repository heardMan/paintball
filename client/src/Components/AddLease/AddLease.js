import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import API from "../../Utilities/API";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import DayPicker from 'react-day-picker';
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
        let stateTest = this.state.test;
        return (
            <div>
                <form>
                    {/* <div className="form-group">
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

                    </div> */}
                    </form>

                    <form className="row">
                        <label>Monthly Rate: </label>
                        $<input type="text" className="form-control" id="monthlyRate" placeholder="1500.00" />
                        <label>Security Deposit: </label>
                        $<input type="text" className="form-control" id="securityDep" placeholder="500.00" />
                        <label>Miscellaneous Fees: </label>
                        <input type="text" className="form-control" id="addFee" placeholder="Pet Deposit" />
                        $<input type="text" className="form-control" id="feeAmount" placeholder="200.00" />
                        <label>Reoccurring Due Date: Rent is due on the  </label>
                        <div style={{margin: '16px', position: 'relative'}}>
                            <SelectBox
                            name="venue[country_id]"
                            items={[
                                { value: '1st', id: 1 },
                                { value: '2nd', id: 2 },
                                { value: '3rd', id: 3 },
                                { value: '4th', id: 4 },
                                { value: '5th', id: 5 },
                                { value: '6th', id: 6 },
                                { value: '7th', id: 7 },
                                { value: '8th', id: 8 },
                                { value: '9th', id: 9 },
                                { value: '10th', id: 10 },
                                { value: '11th', id: 11 },
                                { value: '12th', id: 12 },
                                { value: '13th', id: 13 },
                                { value: '14th', id: 14 },
                                { value: '15th', id: 15 },
                                { value: '16th', id: 16 },
                                { value: '17th', id: 17 },
                                { value: '18th', id: 18 },
                                { value: '19th', id: 19 },
                                { value: '20th', id: 20 },
                                { value: '21st', id: 21 },
                                { value: '22nd', id: 22 },
                                { value: '23rd', id: 23 },
                                { value: '24th', id: 24 },
                                { value: '25th', id: 25 },
                                { value: '26th', id: 26 },
                                { value: '27th', id: 27 },
                                { value: '28th', id: 28 },
                                { value: '29th', id: 29 },
                                { value: '30th', id: 30 },

                            ]}
                            />
                        </div>
                        {/* <input type="text" className="form-control" id="dayOfMonth" placeholder="15"/> */}
                        <label>of the month.</label>
                        <div>-------------------------------------</div>
                        <div>Move In Date: </div>
                        <div class="form-group row" className="dateBox">
                            <label for="moveIn" class="col-2 col-form-label">Move-In Date</label>
                            <div class="col-10">
                                <input class="form-control" type="date" id="moveIn"></input>
                            </div>
                        </div>
                        <div class="form-group row" className="dateBox">
                        <label for="leaseEnd" class="col-2 col-form-label">Lease End Date: </label>
                            <div class="col-10">
                                <input class="form-control" type="date" id="leaseEnd"></input>
                            </div>
                        </div>
                        <button onClick={this.props.handleFormSubmit} name="addNewLease" type="submit" className="btn btn-primary">Submit Lease</button>
                    </form>

                    
                   
                    
                
            </div>
        );
    }
}
export default AddLease;