import React from 'react';

const FunctionalComponentDemo = function () {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Component</h1>
                <p>Functional components allow you to render information to the web page without having to use or change state.</p>
                <dl>
                    <dt>Presentational</dt>
                    <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Unlike class components, functional ones fon't use 'this'.</dd>
                    <dt>No state</dt>
                    <dd>These are 'dumb' components for UI.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element.</dd>
                </dl>
            
            </div>
        </div>
    )
}

export default FunctionalComponentDemo;