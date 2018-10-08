import React from 'react';

export default class ClockApp extends React.Component {
    constructor(props) {
        super(props);
        let date = this.getTimeString();
        this.state= {
            time: date
        }
    }

    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            let date = _this.getTimeString();
            _this.setState({
                time: date
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
                <hr className="explanation" />
                <p>{this.state.time}</p>
            </div>
        )
    }
}