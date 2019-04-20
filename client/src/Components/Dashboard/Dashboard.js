import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="row bg-light">
                    <div className="col-12 my-3 text-center"><h1>Welcome to the dashbord!</h1></div>
                </div>
            </div>

        );
    }
}

export default Dashboard;