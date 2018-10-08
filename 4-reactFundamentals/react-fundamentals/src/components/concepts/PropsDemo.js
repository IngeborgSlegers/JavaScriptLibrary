import React from 'react';

export default class PropsDemo extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}