import React, { Component } from 'react';
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '1da469080194439f99af805fef7cfb43';


export default class NytApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        };
    }

    handleSubmit = (e) => {
        this.setState({pageNumber: 0})
        this.fetchResults()
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
        url = this.state.startDate ? url + `&begin_dates=${this.state.startDate}` : url
        url = this.state.endDate ? url + `&end_dates=${this.state.endDate}` : url
        fetch(url)
        .then(
            (response) => response.json()
        ).then((data) => {
            this.setState({ results: data.response.docs })
        })
    }

    changePageNumber = (e, direction) => {
        e.preventDefault()
        if (direction === 'down') {
            if (this.state.pageNumber > 0) {
                let newPageNumber = this.state.pageNumber - 1
                this.setState({ pageNumber: newPageNumber })
                this.fetchResults();
            }
        }
        if (direction === 'up') {
            let newPageNumber = this.state.pageNumber + 1
            this.setState({ pageNumber: newPageNumber })
            this.fetchResults();
        }
    }

    render() {
        return(
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <span>Enter a SINGLE search term (required): </span>
                        <input type="text" name="search" onChange={this.handleChange} required /><br />
                        <span>Enter a start date: </span>
                        <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <span>Enter an end date: </span>
                        <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <button className="submit">Submit search</button>
                    </form>
                    {
                        this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
                    }
                </div>
            </div>
        )
    }
}