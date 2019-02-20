import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Navigation extends Component {
    render() {
        return (
            <nav id="main-navigation">
                <div className="menu-toggle">
                    <div className="menu-toggle__item menu-toggle__item__one"></div>
                    <div className="menu-toggle__item menu-toggle__item__two"></div>
                    <div className="menu-toggle__item menu-toggle__item__three"></div>
                </div>

                <ul className="navigation-items">

                    <li className="navigation-item">
                        <Link to="/home">Home</Link>
                    </li>

                    <li className="navigation-item">
                        <Link to="/languages">Skills</Link>
                    </li>

                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation; 