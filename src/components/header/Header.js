import React, { Component } from 'react';
import Logo  from './Logo';
import Navigation from './Navigation/Navigation';
import Contact from './Contact';

class Header extends Component {
    render() {
        return (
            <header>
                <Navigation />
                <Logo />
                <Contact />
            </header>    
        )
    }
}

export default Header;
