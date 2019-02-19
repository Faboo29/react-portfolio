import React, { Component } from 'react';
import Logo  from './Logo';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            title: 'Hello world'
        }
    }

    render() {
        return (
            <header>
                <div className="logo-container">
                    <Logo />
                </div>
                <nav id="navigation">
                    <ul>
                        <li>Hello</li>
                        <li>World</li>
                    </ul>
                </nav>
            </header>    
        )
    }
}

export default Header;
