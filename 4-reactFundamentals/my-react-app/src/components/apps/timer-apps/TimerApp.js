import React, { Component } from 'react';

export default class TimerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0};
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        console.log(this.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log(this.interval);
    }

    render() {
        return (
            <div>
                <h1 className="section-title">React Timer</h1>
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
            </div>
        );
    }
}