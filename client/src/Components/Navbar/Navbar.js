import React, { Component } from "react";

import "./Navbar.css";


class Navbar extends Component {
    state = {
        checked: ""
    }
    loggedIn = (toggled) => {
        console.log(toggled);
        if (this.props.state.roles.length < 1) {
            return (
                <nav className="navigation__nav">
                    <ul className={`navigation__list ${toggled}`}>
                        <li className="navigation__item"><a href="/signin" className="navigation__link"><span>01</span> Sign In</a></li>
                        <li className="navigation__item"><a href="/register" className="navigation__link"><span>02</span> Register</a></li>
                    </ul>
                </nav>
            );

        } else {
            return (
                <nav className="navigation__nav">

                    <ul className={`navigation__list ${toggled}`}>
                        <li className="navigation__item"><a href="/managePayments"className="navigation__link"><span>01</span> Payments</a></li>
                        <li className="navigation__item"><a href="/manageTickets"className="navigation__link"><span>02</span> Tickets</a></li>
                        <li className="navigation__item"><a href="/manageProperties"className="navigation__link"><span>03</span> Properties</a></li>
                        <li className="navigation__item"><a href="/manageLeases"className="navigation__link"><span>04</span> Leases</a></li>
                        <li className="navigation__item"><a href="/signout" onClick={this.props.signOut} className="navigation__link"><span>05</span> Sign Out</a></li>  
                    </ul>
   

                </nav>
            )
        }
    }
        
    render() {
        const toggled = this.props.state.menuToggle === true ? "" : "hide" ;
        
        return (
            <div className="navigation">
                 <input name="menuToggle" value={this.state.menuToggle} onChange={this.props.handleInputChange} type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>

                <div className="navigation__background">&nbsp;</div>
                {this.loggedIn(toggled)}
            </div>
        );
    }
}

export default Navbar;