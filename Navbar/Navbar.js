import React, { Component } from "react";

import "./Navbar.module.scss";


class Navbar extends Component {
    loggedIn = () => {
        if (this.props.state.roles.length < 1) {
            return (
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="/signin" className="navigation__link"><span>01</span> Sign In</a></li>
                        <li className="navigation__item"><a href="/register" className="navigation__link"><span>02</span> Register</a></li>
                    </ul>
                </nav>
            );

        } else {
            return (
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="/signout" className="navigation__link"><span>01</span> Sign Out</a></li> 
                    </ul>
                </nav>
            )
        }
    }
    render() {
        return (
            <div className="navigation">
                 <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                    <label for="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>

                <div className="navigation__background">&nbsp;</div>
                {this.loggedIn()}
            </div>
        );
    }
}

export default Navbar;