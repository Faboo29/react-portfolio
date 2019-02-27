import React, { Component } from 'react';

class Language extends Component {

    render() {
        let starCount = this.props.content.level;

        return (
            <li className="language-item">
                <div className="language-item__image">
                    <img 
                        src={require('./assets/' + this.props.content.image + '.png')}
                        alt={this.props.content.code} /> 
                </div>
                <div className="language-item__level">
                    {starCount}
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