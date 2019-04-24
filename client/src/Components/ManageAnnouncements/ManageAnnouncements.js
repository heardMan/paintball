import React, { Component } from "react";

import AddAnnouncement from "../AddAnnouncement/AddAnnouncement";

class ManageAnnouncements extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                ManageAnnouncements

                   
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