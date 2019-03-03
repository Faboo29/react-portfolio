import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Skills from './Skills/Skills';
import About from './About/About';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaderClass: ['loader'],
            languages: []
        }
    }

    componentDidMount() {
        this.setLoadingState();
    }

    setLoadingState() {
        let _loaderClass = [...this.state.loaderClass];
        
        setTimeout(() => {
            _loaderClass.push('has-loaded');
            this.setState({ loaderClass: _loaderClass });
        }, 2000);
    }

    render() {
        return (
            <div id="main">
                {/* <div className={this.state.loaderClass.join(' ')}><span>LOADING</span></div> */}
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/skills" component={Skills}/>
                </Switch>
            </div>
        )
    }
}

export default Main;