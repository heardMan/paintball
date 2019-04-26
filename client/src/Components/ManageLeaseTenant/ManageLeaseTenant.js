import React, { Component } from "react";


class ManageLeasedTenant extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="col col-md-8 mx-auto universal_card shadow">
                <div className="col-12">
                    <a href="/manageLeases"> <h5 className="btn btn-light border border-secondary mb-3">Back to Manage Leases</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Your Lease Title -tenant
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

export default ManageLeasedTenant;