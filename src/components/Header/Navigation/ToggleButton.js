import React, { Component } from 'react';

class ToggleButton extends Component {

    render() {

        return (
            <div 
                className={"menu-toggle " + (this.props.isOpened ? 'toggled' : '')} 
                onClick={this.props.setMenuState} >
                <div className="menu-toggle__item menu-toggle__item__one">
                    
                </div>
                <div className="menu-toggle__item menu-toggle__item__two">
                    
                </div>
                <div className="menu-toggle__item menu-toggle__item__three">
                    
                </div>
            </div>
        )
    }
}

export default ToggleButton;