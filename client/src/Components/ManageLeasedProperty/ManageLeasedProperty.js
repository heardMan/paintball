import React, { Component } from "react";


class ManageLeasedProperty extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="col col-md-8 mx-auto universal_card shadow">
                <div className="col-12">
                    <a href="/manageProperties"> <h5 className="btn btn-light border border-secondary mb-3">Back to Manage Tickets</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Leased Property Title
                        </div>
                        <div className="card-body">
                            Teneant View More Words
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageLeasedProperty;