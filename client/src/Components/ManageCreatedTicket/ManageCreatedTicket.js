import React, { Component } from "react";


class ManageCreatedTicket extends Component {
    render() {
        console.log(this.props.state);
        return (

            <div className="row">
                <div className="col-12">
                    <a href="/manageTickets"> <h5>Back to Manage Tickets</h5> </a>
                </div>
                <div className="col-12">
                    <div className="card rounded-0">
                        <div className="card-title">
                            Created Ticket Title
                        </div>
                        <div className="card-body">
                            Words
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default ManageCreatedTicket;