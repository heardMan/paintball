import React, { Component } from "react";

import AddAnnouncement from "../AddAnnouncement/AddAnnouncement";
import ViewAnnouncements from "../ViewAnnouncements/ViewAnnouncements";

class ManageAnnouncements extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                <a href="/dashboard"><h4>Back to Dashboard</h4></a>
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