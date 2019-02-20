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

    componentWillMount() { 
        Firebase.database().ref('/languages/').once('value').then(snap => {
            this.setState({ languages: snap.val() }); 
        })
    }

    render() {
        return (
            <article className="languages-section">
                <h1>What I speak...</h1>
                <ul>
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