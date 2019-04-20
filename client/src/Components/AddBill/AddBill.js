import React, { Component } from "react";
import API from "../../Utilities/API";
import AutoComplete from "../AutoComplete/AutoComplete";

class AddBill extends Component {
    componentDidMount() {
        console.log(this.props.state.roles);
    }

    state = {
        allTenants: [],
        tenants: []
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
        const manager = this.props.state.roles.indexOf("manager") > -1 ? true : false;
        if (manager) {


            const tenants = this.props.state.tenants;
            return (
                <div>
                    <form>
                        <h1>Create a Bill</h1>
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

                    <form className="row">
                        <label>Rent Rate: </label>
                        $<input type="text" name="rent" pattern="[0-9]*" className="form-control" id="rentRate" onChange={this.props.handleInputChange} value={this.props.state.rent} placeholder="1500.00" />
                        <label>Repair Fees: </label>
                        <input type="text" name="repair" className="form-control" id="addRepair" onChange={this.props.handleInputChange} value={this.props.state.repair} placeholder="Key Replacment" />
                        $<input type="text" name="repairFee" className="form-control" id="repairAmount" onChange={this.props.handleInputChange} value={this.props.state.repairFee} placeholder="200.00" />
                        <div>Bill Cycle Start </div>
                        <div class="form-group row" className="dateBox">
                            <label for="billStart" class="col-2 col-form-label">Bill Cycle Start</label>
                            <div class="col-10">
                                <input name="billStart" class="form-control" type="date" id="billStart" onChange={this.props.handleInputChange} value={this.props.state.billStart}></input>
                            </div>
                        </div>
                        <div class="form-group row" className="dateBox">
                            <label for="billEnd" class="col-2 col-form-label">Bill Cycle End </label>
                            <div class="col-10">
                                <input name="billEnd" class="form-control" type="date" id="billEnd" onChange={this.props.handleInputChange} value={this.props.state.billEnd}></input>
                            </div>
                        </div>
                        <div class="form-group row" className="dateBox">
                            <label for="billDue" class="col-2 col-form-label">Due Date </label>
                            <div class="col-10">
                                <input name="billDue" class="form-control" type="date" id="billDue" onChange={this.props.handleInputChange} value={this.props.state.billDue}></input>
                            </div>
                        </div>
                        <button onClick={this.props.handleFormSubmit} name="addBill" type="submit" className="btn btn-primary">Create Bill</button>
                    </form>



                </div>
            );
        } else {
            return (<div><img src="https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif" alt="" className="img-fluid" /></div>)
        }
    }
}
export default AddBill;