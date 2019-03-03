import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }

        this.setMenuState = this.setMenuState.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    setMenuState() {
        this.setState(prevState => {
            return { isOpened: !prevState.isOpened }
        })
    }

    closeMenu() {
       if (this.state.isOpened) {
           this.setState({ isOpened: false });
       }
    }

    render() {
        let menuItems = [
            {
                path: '/home',
                content: 'Home'
            },
            {
                path: '/skills',
                content: 'Skills'
            },
            {
                path: '/experience',
                content: 'Experience'
            },
            {
                path: '/about',
                content: 'About'
            }
        ];

        return (
            <nav id="main-navigation">
                <ToggleButton setMenuState={this.setMenuState} isOpened={this.state.isOpened} />

                <ul className={"navigation-items " + (this.state.isOpened ? 'is-active' : '')}>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index} className="navigation-item" onClick={this.closeMenu}>
                                    <Link to={item.path}>
                                        <span>{item.content}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default Navigation; 