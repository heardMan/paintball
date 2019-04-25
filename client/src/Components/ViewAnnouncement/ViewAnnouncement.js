import React, { Component } from "react";


class ViewAnnouncement extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="row">
                <div className="col-12">
                    <a href="/dashboard"> <h5>Back to Dashboard</h5> </a>
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