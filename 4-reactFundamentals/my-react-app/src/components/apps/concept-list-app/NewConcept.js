import React, { Component } from 'react';

export default class NewConcept extends Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newConceptText.value;
        if (text) {
            this.props.createConcept(text);
            this.refs.newConceptText.value = '';
        }
    }
    
    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New Concept:</label>
                <input type="text" ref="newConceptText" />
                <button className="button" type="submit">+</button>
            </form>
        )
    }
}