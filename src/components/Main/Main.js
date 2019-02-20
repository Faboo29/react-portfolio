import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Languages from './Languages/Languages';
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
                <div className={this.state.loaderClass.join(' ')}><span>LOADING</span></div>
                <div className="svg-filter-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
                        <filter id="myblurfilter" width="110%" height="100%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                        </filter>
                    </svg>
                </div>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/languages" component={Languages}/>
                </Switch>
            </div>
        )
    }
}

export default Main;