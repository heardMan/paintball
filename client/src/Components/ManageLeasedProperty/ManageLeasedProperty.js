import React, { Component } from "react";


class ManageLeasedProperty extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="row">
                <div className="col-12">
                    <a href="/manageProperties"> <h5>Back to Manage Tickets</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Leased Property Title
                        </div>
                        <div className="card-body">
                        {this.props.state.currentViewLeasedProperty.address}
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageLeasedProperty;