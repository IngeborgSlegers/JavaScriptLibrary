import React from 'react';

const Concept = ({concept, toggle}) => {
    const done = (e) => {
        e.preventDefault();
        toggle(concept);
        console.log("Props:", concept, toggle);
    }

    console.log('concept:', concept);

    return (
        <li>
            {concept.done ? (<del>{concept.text}</del>) :  (concept.text)} <a href="" onClick={done}>✓</a>
        </li>
    );
}

export default Concept;