import React, { Component } from "react";


class ManageLeasedManager extends Component {
    render() {
        console.log(this.props.state);
        console.log(this.props.info);

        return (

            <div className="row">
                <div className="col-12">
                    <a href="/manageLeases"> <h5>Back to Manage Leases</h5> </a>
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