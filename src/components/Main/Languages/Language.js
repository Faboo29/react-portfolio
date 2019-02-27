import React, { Component } from 'react';
import LevelStar from './Star.svg';
import { TweenLite, Elastic } from 'gsap';


class Language extends Component {
    constructor(props) {
        super(props);
        this.starContainer = [];
        this.starTween = null;
    }

    componentDidMount() {
        this.starTween = this.animateStars(this.starContainer);
    }

    animateStars(stars) {
        stars.forEach((star, index) => {
            TweenLite.to(star, 1, {
                y: '0', opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: (2 + index * 0.1)
            })
        });
    }

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
                    <div className="star-wrapper">
                    {
                        [...Array(starCount)].map((star, index) => {
                            return (
                                <img 
                                    src={LevelStar} 
                                    key={index}
                                    ref={ img => this.starContainer.push(img) }
                                    alt="star" />
                            )
                        })
                    }
                    </div>
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