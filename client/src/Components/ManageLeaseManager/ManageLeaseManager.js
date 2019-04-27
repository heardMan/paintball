import React, { Component } from "react";
import "./ManageLeaseManager.css";


class ManageLeasedManager extends Component {
    render() {
        console.log(this.props.state);
        console.log(this.props.info);

        return (

            <div className="col col-md-8 mx-auto manageLeaseManager_card shadow">
                <div className="col-12">
                    <a href="/manageLeases"> <h5 className="btn btn-light border border-secondary mb-3">Back to Manage Leases</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Managed Lease Title -manager
                        </div>
                        <div className="card-body">
                        {this.props.state.currentViewManagedLease.property}
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageLeasedManager;