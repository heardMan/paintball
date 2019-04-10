import React, { Component } from "react";

class Navbar extends Component {
    loggedIn = () => {
        if (this.props.state.roles.length < 1) {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/signIn">Sign In </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            );

        } else {
            return (
                <ul className="navbar-nav ml-auto">
                    {this.props.state.roles.map((role, i) => {
                        let roleName = role === "manager" ? "Manager View" : "Tenant View";
                        return (
                            <li className="nav-item active">
                                <a className="nav-link" href={`/${role}`}>{roleName}</a>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="/">GTP</a>
                {this.loggedIn()}
            </nav>
        );
    }
}

export default Navbar;