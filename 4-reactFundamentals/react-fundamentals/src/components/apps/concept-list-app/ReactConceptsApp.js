import _ from 'lodash';
import { concepts } from './concepts';
import React from 'react';
import ConceptList from './ConceptList';
import NewConcept from './NewConcept';

export default class ReactConceptsApp extends React.Component {
    constructor() {
        super();
        this.state = { concepts: concepts }
    }

    createConcept = (text) => {
        this.state.concepts.push({
            text,
            done: false
        });
        this.setState({concepts: this.state.concepts})
    }

    toggleConcepts = (concepts) => {
        let concept = _.find(this.state.concepts, concepts);
        concept.done = !concept.done;
        this.setState({concepts: this.state.concepts});
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand. Note that this will update when you refresh the page.</p>
                    <NewConcept createConcept={this.createConcept} />
                    <h2>General Concepts</h2>
                    <ConceptList concepts={this.state.concepts} toggle={this.toggleConcept} />
                </div>
            </div>
        )
    }
}