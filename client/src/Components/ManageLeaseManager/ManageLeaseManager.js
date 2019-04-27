import React, { Component } from "react";
import "./ManageLeaseManager.css";


class ManageLeasedManager extends Component {
    render() {
        console.log(this.props.state);
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
                            Words
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageLeasedManager;