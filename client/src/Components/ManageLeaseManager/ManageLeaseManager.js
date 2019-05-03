import React, { Component } from "react";
import "./ManageLeaseManager.css";
import API from "../../Utilities/API";


class ManageLeasedManager extends Component {
    componentDidMount(){
        //API.getLease(this.props.state.currentViewManagedLease.property)
    }
    render() {
        console.log(this.props.state);
        API.getLease(this.props.state.currentViewManagedLease.property)
        .then(res=>{console.log(res)})
        // .catch(err=>{err});
        

        return (

            <div className="col col-md-8 mx-auto universalCard shadow">
                <div className="col-12">
                    <a href="/manageLeases"> <h5 className="btn universal_btn border border-secondary mb-3">Back to Manage Leases</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Managed Lease Title -manager
                        </div>
                        <div className="card-body">
                        <div className="row">
                        <div className="col-12">
                        <ul className="list-group">
                        
                        </ul>
                        </div>
                        </div>

                        {this.props.state.currentViewManagedLease.property}
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageLeasedManager;