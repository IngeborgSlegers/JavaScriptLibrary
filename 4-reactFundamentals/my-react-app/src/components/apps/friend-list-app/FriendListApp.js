import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './FriendList';

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

export default class FriendListApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [] 
        }
        axios.get(API_BASE)
            .then( response => {
                this.setState({ friends: response.data });
                this.renderFriendsList(this.state.friends);
            });
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("Constructor, state:", this.state.friends)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Button pressed.");
        let name = this.refs.name.value;
        let age = this.refs.age.value;
        console.log("Name:", name);
        console.log("Age:", age);

        let friendsTemp = this.state.friends;
        console.log(friendsTemp);

        axios.post(API_BASE, { name, age })
            .then( response => {
                friendsTemp.push(response.data);
                this.setState({ friends: friendsTemp });
                this.renderFriendsList(this.state.friends);
                this.refs.name.value = "";
                this.refs.age.value = "";
                console.log(response);
            });
    }

    renderFriendsList() {
        //console.log(this.state.friends);
        return <FriendList props={ this.state.friends } />
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <div className="col-xs-4">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>Enter a Friend!</h3>
                            <fieldset className="form-group">
                                <label>Friend's Name:</label>
                                <input type="text"
                                        ref="name"
                                        name="name"
                                        className="form-control"
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Friend's Age:</label>
                                <input type="text"
                                        ref="age"
                                        name="name"
                                        className="form-control"
                                />
                            </fieldset>

                            <button className="btn btn-success" type="submit">Save Friend</button>
                        </form>
                    </div>
                    <div>
                        {this.renderFriendsList(this.state.friends)}
                    </div>
                </div>
            </div>
        )
    }
}