import React, { Component } from 'react';
import FormResults from './FormResults'
import styled from 'styled-components';

const SearchInput = styled.input`
    margin-top: 10px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
    color: indigo;
`;

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };    
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleKeyUp = (e) => {
        const key = '8ca6f7bd2d65688174553ad084f84a65';

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
            .then(response => {
                if (response.status !== 200) {
                    console.log("Error: " + response.status);
                    return;
                }

                response.json().then(data => {
                    const results = data.results;
                    this.setState({ results });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} id="form">
                <SearchInput 
                    onKeyUp={this.handleKeyUp} 
                    id="searchInput" 
                    className="searchBar" 
                    type="text" 
                    placeholder="Search a movie" 
                    required 
                />
                {this.state.results === [] ? (
                    <div />
                ) : (
                    <FormResults results={this.state.results} /> 
                )}
            </form>
        );
    }
}