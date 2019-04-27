import React, { Component } from "react";
import API from "../../Utilities/API";
import './AddLease.css';
import AutoComplete from "../AutoComplete/AutoComplete";



class AddLease extends Component {

    state = {
        allTenants: [],
        ownedPropertyList: [],
        tenants: [],

        miscFees: [],

    }

    addSelected = event => {
        event.preventDefault();
        //console.log(event.target.name);
        if (event.target.name === "addPropertyToLease") {
            this.props.state.propertyToLease = event.target.id
        } else {
            let arr = [];
            let oldTenants = this.state.tenants;
            oldTenants.forEach(tenant => {
                arr.push(tenant);
            });
            arr.push(event.target.id);
            this.setState({
                tenants: arr
            });
            this.props.state.tenants.push(event.target.id);
            //  console.log(this.props.state);
        }

        //console.log(this.props.state.propertyToLease);


    }
    removeTenant = event => {
        //console.log(event.target.id.split("-")[1])
        let removed = this.state.tenants.filter((tenant, i) => {
            return tenant !== event.target.id.split("-")[1]
        });
        //console.log(`REMOVED: ${removed}`);
        this.setState({
            tenants: removed
        })
        this.props.state.tenants = removed;

        //console.log(this.props.state.tenants);
    }

    removeFeeRow = event => {
        event.preventDefault();
        //console.log(event.target)
        let removed = this.state.miscFees.filter((newFee, i) => {
            return newFee.name !== event.target.id.split("-")[1]
        });
        //console.log(`REMOVED: ${removed}`);
        this.setState({
            miscFees: removed
        })
        this.props.state.miscFees = removed;

        //console.log(this.props.state.miscFees);
    }

    addFeeRow = event => {
        event.preventDefault();

        const newFee = {
            name: this.props.state.misc,
            amount: this.props.state.miscFee
        };
        //this.props.state.miscFees.push(newFee);
        const arr = this.state.miscFees;
        arr.push(newFee);
        this.setState({
            miscFees: arr
        })
        //console.log(this.props.state.miscFees);

    }

    componentDidMount() {


        API.getUsers()
            .then(resp => {
                const arr = [];

                resp.data.forEach(user => {
                    arr.push(user.email);
                })
                this.setState({
                    allTenants: arr,


                })
                //console.log(this.state.allTenants);
            })
            .catch(err => console.log(err));


    }


    render() {


        const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        const tenants = this.props.state.tenants;

        console.log(this.state.miscFees);
        console.log(this.props.state);
        if(this.props.state.roles.indexOf("manager") < 0){
            return(null)
        } else{
        return (

            <div className="universal_card shadow">
                <div className="card-title">
                    <h5>Add A Lease</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-12">
                                    Add Tenants

                            </div>
                                <div className="col-12">
                                    {tenants.map((tenant) => {

                                        return (
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            {tenant}
                                                        </div>
                                                        <div className="col-6">
                                                            <button name="removeTenant" type="button" onClick={this.removeTenant} className="close" aria-label="Close">
                                                                <span id={`remove-${tenant}`} aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>






                                            </ul>
                                        );
                                    })}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <span>
                                        <AutoComplete
                                            suggestions={this.state.allTenants}
                                            addSelected={this.addSelected}
                                            type="addTenant"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p>Add Property</p>
                                    <span>
                                        <AutoComplete
                                            suggestions={this.props.state.ownedPropertyList}
                                            addSelected={this.addSelected}
                                            kind="leaseProperty"
                                            handleInputChange={this.props.handleInputChange}
                                        />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                            <label>Monthly Rate:</label>
                            $<input type="text" name="rate" pattern="[0-9]*" className="form-control" id="monthlyRate" onChange={this.props.handleInputChange} value={this.props.state.rate} placeholder="1500.00" />
                        </div>
                        <div className="form-group">
                            <label>Security Deposit: </label>
                            $<input type="text" name="secDep" className="form-control" id="securityDep" onChange={this.props.handleInputChange} value={this.props.state.secDep} placeholder="500.00" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div name="charges" id="charges" className="col-12">

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.miscFees.map((fee, i) => {
                                                return (
                                                    <tr>
                                                        <td name="removeFeeRow" type="button" onClick={this.removeFeeRow} className="close" aria-label="Close">
                                                            <span>
                                                                <button id={`remove-${fee.name}`} aria-hidden="true">
                                                                    &times;
                                                </button>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            {fee.name}

                                                        </td>
                                                        <td>{fee.amount}</td>
                                                    </tr>

                                                )
                                            })}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <label>Miscellaneous Fees: </label>
                            <input type="text" name="misc" className="form-control" id="addFee" onChange={this.props.handleInputChange} value={this.props.state.misc} placeholder="Pet Deposit" />
                            <input type="text" name="miscFee" className="form-control" id="feeAmount" onChange={this.props.handleInputChange} value={this.props.state.miscFee} placeholder="200.00" />
                            <button onClick={this.addFeeRow} name="" type="submit" className="btn btn-primary">Button</button>
                        </div>
                        <div className="form-group">
                            <label>Reoccurring Due Date: Rent is due on the  </label>
                            <label htmlFor="exampleFormControlSelect1">Day of Month</label>
                            <select className="form-control" name="dueDate" id="dueDate" onChange={this.props.handleInputChange} value={this.props.state.dueDate}>
                                {days.map(day => <option key={day} value={day}>{day}</option>)}
                            </select>
                        </div>

                        <label>of the month.</label>
                        <div>-------------------------------------</div>
                        <div>Move In Date: </div>
                        <div className="form-group row" className="dateBox">
                            <label htmlFor="moveIn" className="col-2 col-form-label">Move-In Date</label>
                            <div className="col-10">
                                <input name="moveIn" className="form-control" type="date" id="moveIn" onChange={this.props.handleInputChange} value={this.props.state.moveIn}></input>
                            </div>
                        </div>
                        <div>
                            <label>Miscellaneous Fees: </label>
                            <input type="text" name="misc" className="form-control" id="addFee" onChange={this.props.handleInputChange} value={this.props.state.misc} placeholder="Pet Deposit" />
                            <input type="text" name="miscFee" className="form-control" id="feeAmount" onChange={this.props.handleInputChange} value={this.props.state.miscFee} placeholder="200.00" />
                            <button onClick={this.addFeeRow} name="" type="submit" className="btn universal_btn">Button</button>
                        </div>
                        <div className="form-group">
                            <h4>Reoccurring Due Date</h4>
                            <label htmlFor="exampleFormControlSelect1">Choose a Day of the Month</label>
                            <select className="form-control" name="dueDate" id="dueDate" onChange={this.props.handleInputChange} value={this.props.state.dueDate}>
                                {days.map(day => <option key={day} value={day}>{day}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="moveIn">Move-In Date</label>
                            <input name="moveIn" className="form-control" type="date" id="moveIn" onChange={this.props.handleInputChange} value={this.props.state.moveIn}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="leaseEnd">Lease End Date: </label>
                            <input name="moveOut" className="form-control" type="date" id="leaseEnd" onChange={this.props.handleInputChange} value={this.props.state.moveOut}></input>
                        </div>
                        <div>
                            <button onClick={this.props.handleFormSubmit} name="addNewLease" type="submit" className="btn universal_btn">Submit Lease</button>
                        </div>
                    </form>
                </div>
            </div>
        );
        }
    }
}
export default AddLease;