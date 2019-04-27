import React, { Component } from "react";


class ViewAnnouncement extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="col col-md-8 mx-auto universalCard shadow">
                <div className="col-12">
                    <a href="/dashboard"> <h5 className="btn universal_btn border border-secondary mb-3">Back to Dashboard</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                           Anouncement Title
                        </div>
                        <div className="card-body">
                            Words and moreinformation
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ViewAnnouncement;