import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand navbar-light bg-light fixed-top">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/signIn">Sign In </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;