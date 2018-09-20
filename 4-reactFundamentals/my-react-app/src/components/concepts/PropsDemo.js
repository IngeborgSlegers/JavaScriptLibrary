import React from 'react';
import PropTypes from 'prop-types';

export const Projects = [
    { title:'Beast Creature', author:'Adam Smith', codepenUrl:'https://codepen.io/Adamws33/pen/KZQxwJ', date:'01/01/2018' },
    { title:'Another Beast', author:'Allison Summers', codepenUrl:'https://codepen.io/Adamws33/pen/KZQxwJ', date:'01/01/2018' },
    { title:'Beast Mode', author:'Andres Martin', codepenUrl:'https://codepen.io/Adamws33/pen/KZQxwJ', date:'01/01/2018' },
    { title:'Beasty', author:'Andrew Gunst', codepenUrl:'https://codepen.io/Adamws33/pen/KZQxwJ', date:'01/01/2018' },
]

export default class PropsDemo extends React.Component {
    constructor(props) {
        super(props)
        console.log("PropsDemo class:", props);
        this.state = { projects: Projects };
        console.log("State check:", this.state.projects);
    }
    render() {
        const works = this.state.projects.map((project, i) => {
            console.log("Project", project);
            console.log("Index", i);
            return (
                <div key={i}>
                    <Title title={project.title} />
                    <Author author={project.author} />
                    <CodepenUrl codepenUrl={project.codepenUrl} />
                    <Footer date={project.date} />
                </div>
            );
        })

        /*PUT TEMP SPACER HERE FOR CLARITY*/

        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>List of Projects</h1>
                    <div>
                        {works}
                        {/* <Title title={this.props.title} />
                        <Author author={this.props.author} />
                        <CodepenUrl codepenUrl={this.props.codepenUrl} />
                        <Footer date={this.props.date} /> */}
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

class Title extends PropsDemo {
    constructor(props) {
        super(props)
        console.log("Title props:", props);
    }
    render() {
        return (
            <p>
                {this.props.title}
            </p>
        );
    }
}

class Author extends PropsDemo {
    constructor(props) {
        super(props)
        console.log("Author props:", props);
    }
    render() {
        return (
            <p>
                {this.props.author}
            </p>
        );
    }
}

class CodepenUrl extends PropsDemo {
    constructor(props) {
        super(props)
        console.log("CodepenUrl props:", props);
    }
    render() {
        return (
            <p>
                {this.props.codepenUrl}
            </p>
        );
    }
}

class Footer extends PropsDemo {
    constructor(props) {
        super(props)
        console.log("Date props:", props);
    }
    render() {
        return (
            <p>
                {this.props.date}
            </p>
        );
    }
}

PropsDemo.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    codepenUrl: PropTypes.string,
    date: PropTypes.string
}

PropsDemo.defaultProps = {
    title: 'Generic Creature project',
    author: 'EFA Student',
    codepenUrl: 'www.codepen.com',
    date: '01/01/2018',
}

