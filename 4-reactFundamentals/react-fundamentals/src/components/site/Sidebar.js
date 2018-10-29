import React from 'react';
import {
    Route, 
    Link, 
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import NYTApp from '../apps/nyt-app/NytApp';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to="classcomponent">Class Component</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/timer">Timer</Link></li>
                <li><Link to="/reactconceptslist">React Concepts Checklist</Link></li>
                <li><Link to="/nytapp">NYT App</Link></li>
            </ul>   
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
                <Route exact path="/timer"><TimePiecesApp /></Route>
                <Route exact path="/reactconceptslist"><ReactConceptsApp /></Route>
                <Route exact path="/nytapp"><NYTApp /></Route>
            </Switch>
        </div>
    </div>
)

export default Sidebar;