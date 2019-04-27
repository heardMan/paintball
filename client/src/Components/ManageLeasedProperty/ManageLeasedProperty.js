import React, { Component } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";


class ManageLeasedProperty extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="col col-md-8 mx-auto universalCard shadow">
                <div className="col-12">
                    <a href="/manageProperties"> <h5 className="btn universal_btn border border-secondary mb-3">Back to Manage Tickets</h5> </a>
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