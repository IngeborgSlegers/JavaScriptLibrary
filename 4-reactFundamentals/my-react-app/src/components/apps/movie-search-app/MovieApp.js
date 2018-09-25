import React, { Component } from 'react';
import { Form } from './Form';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: purple;
    `

export default class MovieApp extends Component {

    render() {
        return (
            <Wrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </Wrapper>
        )
    }
}