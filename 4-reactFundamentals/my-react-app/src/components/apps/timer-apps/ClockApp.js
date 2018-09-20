import React, { Component } from 'react';

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString();
        var dateTwo = this.getTimeStringTwo();
        this.state = {
            time: date,
            newTime: dateTwo
        }
    }

    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    getTimeStringTwo() {
        const dateTwo = new Date()
        dateTwo.setHours(dateTwo.getHours()-6);
        return dateTwo.toLocaleTimeString();
    }

    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            var dateTwo = _this.getTimeStringTwo();
            _this.setState({
                time: date,
                newTime: dateTwo
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1 className="section-title">React Clock</h1>
                <p>Indianapolis, IN</p>
                <hr className="explanation" />
                <p>{this.state.time}</p>
                <p>Brussels, BE</p>
                <hr className="explanation" />
                <p>{this.state.newTime}</p>
            </div>
        );
    }
}