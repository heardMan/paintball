import React, { Component } from "react";
import API from "../../Utilities/API";
import AutoComplete from "../AutoComplete/AutoComplete";

class AddBill extends Component {
    componentDidMount() {
        console.log(this.props.state.roles);
    }

    state = {
        allTenants: [],
        tenants: [],
        repairFees: []

    }

    addSelected = event => {
        event.preventDefault();
        console.log(event.target.id);
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
        console.log(this.props.state);



    }
    removeTenant = event => {
        console.log(event.target.id.split("-")[1])
        let removed = this.state.tenants.filter((tenant, i) => {
            return tenant !== event.target.id.split("-")[1]
        });
        console.log(`REMOVED: ${removed}`);
        this.setState({
            tenants: removed
        })
        this.props.state.tenants = removed;

        console.log(this.props.state.tenants);
    }
    
    removeFeeRow = event => {
        event.preventDefault();
        console.log(event.target)
        let removed = this.state.repairFees.filter((newFee, i) => {
            return newFee.name !== event.target.id.split("-")[1]
        });
        console.log(`REMOVED: ${removed}`);
        this.setState({
            repairFees: removed
        })
        this.props.state.repairFees = removed;

        console.log(this.props.state.repairFees);
    }

    addFeeRow = event => {
        event.preventDefault();

        const newFee = {
            name: this.props.state.repair,
            amount: this.props.state.repairFee
        };
        console.log(newFee);
        console.log(this.props.state.repairFees)
        // this.props.state.repairFees.push(newFee);
        const arr = this.state.repairFees;
        arr.push(newFee);
        this.setState({
            repairFees: arr
        })
        console.log(this.props.state.repairFees);

    }

    componentDidMount() {
        API.getUsers()
            .then(resp => {
                const arr = [];

                resp.data.forEach(user => {
                    arr.push(user.email);
                })
                this.setState({
                    allTenants: arr
                })
                console.log(this.state.allTenants);
            })
            .catch(err => console.log(err));
    }

   render() {
        const manager = this.props.state.roles.indexOf("manager") > 0 ? true : false;
        if (this.props.state.roles.indexOf("manager")>-1) {


            const tenants = this.props.state.tenants;
            return (
                <div>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <h1>Create a Bill</h1>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-12">
                                    Add Tenants
                            </div>
                                <div className="col-12">
                                    {tenants.map((tenant) => {

                                        return (
                                            <div className="card">
                                                <div className="card-title">
                                                    <span>
                                                        <button name="removeTenant" type="button" onClick={this.removeTenant} class="close" aria-label="Close">
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
                                            suggestions={this.state.allTenants}
                                            addSelected={this.addSelected}
                                        />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </form>

                    <form>
                    <div className="form-group">
                        <label>Rent Rate: </label>
                        $<input type="text" name="rent" pattern="[0-9]*" className="form-control" id="rentRate" onChange={this.props.handleInputChange} value={this.props.state.rent} placeholder="1500.00" />
                        </div>
                        <div className="form-group">


                        <div className="row">
                            <div name="charges" id="charges" className="col-12">
                            
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Repair Name</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.repairFees.map((fee, i) => {
                                            return (
                                                <tr>
                                                <td name="removeFeeRow" type="button" onClick={this.removeFeeRow} class="close" aria-label="Close">
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
                        <div className="form-group">
                            <label>Repair Fees: </label>
                            <input type="text" name="repair" className="form-control" id="addRepair" onChange={this.props.handleInputChange} value={this.props.state.repair} placeholder="Key Replacment" />
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <input type="text" name="repairFee" className="form-control" id="repairAmount" onChange={this.props.handleInputChange} value={this.props.state.repairFee} placeholder="200.00" />
                        </div>
                        <div>
                            <button onClick={this.addFeeRow} name="" type="submit" className="btn managePayments_btn">Add Fee</button>
                        </div>
                    </div>
                        <h4>Bill Cycle Dates</h4>

                        <div class="form-group">
                            <label for="billStart">Bill Cycle Start</label>
                                <input name="billStart" class="form-control" type="date" id="billStart" onChange={this.props.handleInputChange} value={this.props.state.billStart}></input>

                        </div>
                        
                        <div class="form-group">
                            <label for="billEnd">Bill Cycle End </label>
                            <input name="billEnd" class="form-control" type="date" id="billEnd" onChange={this.props.handleInputChange} value={this.props.state.billEnd}></input>
                        </div>
                        <div class="form-group">
                            <label for="billDue">Due Date </label>
                            <input name="billDue" class="form-control" type="date" id="billDue" onChange={this.props.handleInputChange} value={this.props.state.billDue}></input>
                        </div>
                        <button onClick={this.props.handleFormSubmit} name="addBill" type="submit" className="btn managePayments_btn">Create Bill</button>
                    </form>



                </div>
            );
        } else {
            return (null)
        }
    }
}
export default AddBill;
