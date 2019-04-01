import React, { Component } from 'react'

class Tools extends Component {

    render() {
        return (
            <li 
                className="tool-item" >
                <div className="tool-item__image">
                    <img 
                        src={require('./assets/' + this.props.content.image + '.svg')}
                        alt={this.props.content.code} /> 
                </div>

                <div 
                    className="tool-item__content"
                    ref={div => this.descriptionContainer = div} >
                    <h2>{this.props.content.tool}</h2>
                    <div className="description">
                        {this.props.content.description}
                    </div>
                </div>
            </li>
        )
    }
}

export default Tools;