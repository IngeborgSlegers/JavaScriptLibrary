import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  handleKeyUp = (e) => {
    const key = "8ca6f7bd2d65688174553ad084f84a65"
    //capture user's input from event

    //use user's input to hit an api to get movies

    //store the results of our api query to our state

    //we also need to handle errors
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
      </form>
    );
  }
}