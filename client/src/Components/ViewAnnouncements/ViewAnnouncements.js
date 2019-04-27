import React, { Component } from "react";
import "./ViewAnnouncements.css";

class ViewAnnouncements extends Component {
    render() {
        return (
            <div className="col shadow universal_card">
                <div className="card-title">
                    <h5>Announcements</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-6">
                                    Announcement Title
                                </div>
                                <div className="col-6">
                                    <a className="float-right" href="/manageAnnouncement">Manage</a>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ViewAnnouncements;