import React, { Component } from 'react';
import LevelStar from './Star.svg';
import { TweenLite, Elastic, Power2 } from 'gsap';


class Language extends Component {
    constructor(props) {
        super(props);
        this.languageContainer = null;
        this.languageTween = null;
        this.descriptionContainer = null;
        this.descriptionTween = null;
        this.starContainer = [];
        this.starTween = null;
    }

    componentDidMount() {
        this.starTween = this.animateStars(this.starContainer);
        this.languageTween = this.animateLanguage(this.languageContainer);
        this.descriptionTween = this.animateDescription(this.descriptionContainer);
    }

    animateStars(stars) {
        stars.forEach((star, index) => {
            TweenLite.to(star, 1, {
                y: '0', opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: (1.2 + index * 0.1)
            })
        });
    }

    animateLanguage(languageBlock) {
        TweenLite.to(languageBlock, 1, {
            y: '0', opacity: 1, scale: 1, ease: Power2.easeOut, delay: 0.4
        })
    }

    animateDescription(descriptionBlock) {
        TweenLite.to(descriptionBlock, 1, {
            y: '0', opacity: 1, scale: 1, ease: Power2.easeOut, delay: 0.6
        })
    }

    render() {
        let starCount = this.props.content.level;

        return (
            <li 
                className="language-item"
                ref={li => this.languageContainer = li } >
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
                <div 
                    className="language-item__content"
                    ref={div => this.descriptionContainer = div} >
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