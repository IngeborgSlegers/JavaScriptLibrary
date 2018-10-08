import React from 'react';

const JSXRules = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actaully closer to JavaScripts.</dd>
                    <dt>"React elements"</dt>
                    <dd>These are used to constuct and update the DOM, or what you see on the screen.</dd>
                    <dt>JSX is not required</dt>
                    <dd>You can write your return in vanilla JS, but most sane people use JSX.</dd>
                </dl>
            </div>
        </div>
    )
}

export default JSXRules;