import React, { Component } from "react";


class ManageLeasedTenant extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="row">
                <div className="col-12">
                    <a href="/manageLeases"> <h5>Back to Manage Leases</h5> </a>
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