import React, { Component } from 'react';
import LevelStar from './Star.svg';
import SkillAnimations from '../SkillAnimations';


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
        this.starTween = SkillAnimations.animateStars(this.starContainer);
        this.languageTween = SkillAnimations.animateLanguage(this.languageContainer);
        this.descriptionTween = SkillAnimations.animateDescription(this.descriptionContainer);
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