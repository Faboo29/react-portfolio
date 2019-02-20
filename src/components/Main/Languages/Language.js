import React, { Component } from 'react';

class Language extends Component {

    render() {
        return (
            <li className="language-item">
                <div className="language-item__image">
                    {this.props.content.image}
                </div>
                <div className="language-item__level">
                    {this.props.content.level}
                </div>
                <div className="language-item__content">
                    <h2>{this.props.content.code}</h2>
                    <div className="description">
                        {this.props.content.description}
                    </div>
                </div>
            </li>
        )
    }
}

export default Language;