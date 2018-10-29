import React from 'react';

export default class NewConcept extends React.Component {
    create = (e) => {
        e.preventDefault();
        let text = this.refs.newConceptText.value;
        if (text) {
            this.props.createConcept(text);
            this.refs.newConceptText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.create}>
                <label>New Concept: </label> <input type="text" ref="newConceptText"/> <button className="button" type="submit">+</button>
            </form>
        );
    }
}