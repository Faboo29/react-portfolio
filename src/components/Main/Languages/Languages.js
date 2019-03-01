import React, { Component } from 'react';
import data from './languages.json';
import Language from './Language';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: data.languages
        }
    }

    render() {
        return (
            <article className="main-section main-section__languages">
                <div className="section-title"> 
                    <h1>What I speak <span>...</span></h1>
                </div>

                <ul className="languages-list-items">
                    {
                        this.state.languages.map((language, index) => {
                            return <Language key={index}  content={language} />
                        })
                    }
                </ul>
            </article>
        )
    }
}

export default Main;