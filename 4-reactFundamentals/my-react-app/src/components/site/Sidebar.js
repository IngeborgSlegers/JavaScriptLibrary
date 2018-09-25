import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources  from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleDiagram from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import NytApp from '../apps/nyt-app/NytApp';
import FriendListApp from '../apps/friend-list-app/FriendListApp';

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to="/classcomponent">Class Component</Link></li>
                <li><Link to="/propsdemo">Props Demo</Link></li>
                <li><Link to="/lifecyclediagram">Life Cycle Diagram</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/timer">Timers</Link></li>
                <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li>
                <li><Link to="/movie">Movie Search App</Link></li>
                <li><Link to="/nyt">New York Times</Link></li>
                <li><Link to="/friendlist">Friend List App</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
                <Route exact path="/propsdemo"><PropsDemo />
                    {/* <div>
                        <PropsDemo title='Beast Creature' author='Adam Smith' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/01/2018' />
                        <PropsDemo title='Another Beast' author='Allison Summers' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/01/2018' />
                        <PropsDemo title='Beast Mode' author='Andres Martin' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/01/2018' />
                        <PropsDemo title='Beasty' author='Andrew Gunst' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/01/2018' />
                    </div> */}
                </Route> 
                <Route exact path="/lifecyclediagram"><LifeCycleDiagram /></Route>   
                <Route exact path="/jsxrules"><JSXRules /></Route>     
                <Route exact path="/timer"><TimePiecesApp /></Route> 
                <Route exact path="/reactconceptlist"><ReactConceptsApp /></Route>
                <Route exact path="/movie"><MovieSearchApp /></Route> 
                <Route exact path="/nyt"><NytApp /></Route>     
                <Route exact path="/friendlist"><FriendListApp /></Route>
            </Switch>
        </div>
    </div>
)

export default Sidebar;