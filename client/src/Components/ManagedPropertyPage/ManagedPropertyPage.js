import React, { Component } from "react";


class ManagedProperty extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="row">
                <div className="col-12">
                    <a href="/manageProperties"> <h5>Back to Manage Properties</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">

                        </div>
                        <div className="card-body">
                            {this.props.state.currentViewProperty.address}
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManagedProperty;