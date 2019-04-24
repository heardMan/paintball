import React, { Component } from "react";
import AddAnnounce from "../AddAnnounce/AddAnnounce";

class ManageAnnouncements extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                ManageAnnouncements
                <AddAnnounce 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />
                </div>

                </div>
           

        );
    }
}

export default ManageAnnouncements;