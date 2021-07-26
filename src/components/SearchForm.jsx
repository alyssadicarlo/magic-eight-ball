import React, { Component } from 'react';

import EightBall from './EightBall';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            response: ''
        }
    }

    _handleChange = (event) => {
        this.setState({
            question: event.target.value,
            response: ''
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.fetchResponse();
    }

    fetchResponse = async () => {
        const answer = await fetch(
            `https://8ball.delegator.com/magic/JSON/${this.state.question}`
        ).then(response => response.json());

        console.log(answer.magic);

        this.setState({
            response: answer.magic
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this._handleSubmit}>
                    <input type="text" placeholder="Write your question here and hit enter..." onChange={this._handleChange} />
                </form>
                <EightBall message={this.state.response} shake={this.state.response === '' ? 'eball' : 'eball shake'} show={this.state.response === '' ? '' : 'play'} />
            </>
        );
    }
}

export default SearchForm;