import React, { Component } from "react";

class ViewAnnouncementsDash extends Component {
    render() {
        return (
            <div className="card rounded-0 p-3 my-3">
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
                                    <a className="float-right" href="/viewAnnouncement">View More</a>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ViewAnnouncementsDash;