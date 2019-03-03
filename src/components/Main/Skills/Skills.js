import React, { Component } from 'react';
import data from './skills.json';
import Language from './Language/Language';
import Tools from './Tools/Tools';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: data.languages,
            tools: data.tools
        }
    }

    render() {
        return (
            <article className="main-section main-section__skills">
                <div className="page-bookmark">
                    <span>Skills</span>
                </div>
                <div id="languages-section" className="inner-section">
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
                </div>

                <div id="tools-section" className="inner-section">
                    <div className="section-title"> 
                        <h1>What I use <span>...</span></h1>
                    </div>
                    <ul className="tools-list-items">
                        {
                            this.state.tools.map((tool, index) => {
                                return <Tools key={index}  content={tool} />
                            })
                        }
                    </ul>
                </div>
            </article>
        )
    }
}

export default Skills;