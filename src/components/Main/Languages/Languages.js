import React, { Component } from 'react';
import Firebase from '../Firebase/Firebase';
import 'firebase/database';
import Language from './Language';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderClass: ['loader'],
            languages: []
        }
    }

    componentDidMount() { 
        Firebase.database().ref('/languages/').once('value').then(snap => {
            this.setState({ languages: snap.val() }); 
        })
    }

    render() {
        return (
            <article className="main-section main-section__languages">
                <div className="section-title"> 
                    <h1>What I speak...</h1>
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