import React, { Component } from "react";


class ManageAnnouncementPage extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="col col-md-8 mx-auto universalCard shadow">
                <div className="col-12">
                    <a href="/manageAnnouncements"> <h5 className="btn universal_btn border border-secondary mb-3">Back to Manage Announcements</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Announcement Title
                        </div>
                        <div className="card-body">
                            Edit Announcement info
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageAnnouncementPage;