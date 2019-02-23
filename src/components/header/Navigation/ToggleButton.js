import React, { Component } from 'react';

class ToggleButton extends Component {

    render() {

        return (
            <div 
                className={"menu-toggle " + (this.props.isOpened ? 'toggled' : '')} 
                onClick={this.props.setMenuState} >
                <div className="menu-toggle__item menu-toggle__item__one">
                    <svg x="0px" y="0px"
                        width="60px" height="3px" viewBox="0 0 60.06 3.058" enableBackground="new 0 0 60 3">
                        <path fill="#58ADBF" d="M59.982,1.529c0,0.276-0.224,0.5-0.5,0.5H0.627c-0.276,0-0.5-0.224-0.5-0.5l0,0c0-0.276,0.224-0.5,0.5-0.5
                        h58.854C59.758,1.029,59.982,1.252,59.982,1.529L59.982,1.529z"/>
                    </svg>
                </div>
                <div className="menu-toggle__item menu-toggle__item__two">
                    <svg x="0px" y="0px"
                        width="60px" height="3px" viewBox="0 0 60.06 3.058" enableBackground="new 0 0 60 3">
                        <path fill="#58ADBF" d="M59.982,1.529c0,0.276-0.224,0.5-0.5,0.5H0.627c-0.276,0-0.5-0.224-0.5-0.5l0,0c0-0.276,0.224-0.5,0.5-0.5
                        h58.854C59.758,1.029,59.982,1.252,59.982,1.529L59.982,1.529z"/>
                    </svg>
                </div>
                <div className="menu-toggle__item menu-toggle__item__three">
                    <svg x="0px" y="0px"
                        width="60px" height="3px" viewBox="0 0 60.06 3.058" enableBackground="new 0 0 60 3">
                        <path fill="#58ADBF" d="M59.982,1.529c0,0.276-0.224,0.5-0.5,0.5H0.627c-0.276,0-0.5-0.224-0.5-0.5l0,0c0-0.276,0.224-0.5,0.5-0.5
                        h58.854C59.758,1.029,59.982,1.252,59.982,1.529L59.982,1.529z"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default ToggleButton;