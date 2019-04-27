import React, { Component } from "react";

import AddAnnouncement from "../AddAnnouncement/AddAnnouncement";
import ViewAnnouncements from "../ViewAnnouncements/ViewAnnouncements";
import "./ManageAnnouncement.css";

class ManageAnnouncements extends Component {
    render() {
        return (
            
                <div className="col col-md-8 mx-auto shadow manageAnnouncement_card">
                    <div className="col-12">
                    <a href="/dashboard"><h4 className="btn universal_btn border border-secondary mb-3">Back to Dashboard</h4></a>
                    </div>

                    <div className="col-12">
                        <ViewAnnouncements
                            state={this.props.state}
                            handleFormSubmit={this.props.handleFormSubmit}
                            handleInputChange={this.props.handleInputChange} />
                    </div>
                    <div className="col-12">
                        <AddAnnouncement
                            state={this.props.state}
                            handleFormSubmit={this.props.handleFormSubmit}
                            handleInputChange={this.props.handleInputChange} />

                    </div>
                </div>
           

        );
    }
}

export default ManageAnnouncements;