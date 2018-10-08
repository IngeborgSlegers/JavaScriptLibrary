import React from 'react';

const Concept = ({concept, toggle}) => {
    const done = (e) => {
        e.preventDefault();
        toggle(concept);
        console.log("Props:", concept, toggle);
    }
}

export default Concept;