import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character : ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
      }

    handleChange(event) {
        if (event.target.value.length <= MAX_LENGTH) {
        this.setState({ character: event.target.value });
    }
}

    render() {
        const border = this.state.character.length >= MAX_LENGTH;
        const numberRemaining = MAX_LENGTH - this.state.character.length;

        return (
            <form
            className="QuoteForm" onSubmit={this.handleSubmit} >
            <label htmlFor="character">Character:</label>
            <input className ={border ? "length-maximum-reached" : "length-ok"}
                id="character"
                name="character"
                type="text"
                value={this.state.character}
                onChange={this.handleChange}
            />
            <p className="remaining-characters">
                {numberRemaining} remaining characters
            </p>
            <p>
            You typed: <strong>{this.state.character}</strong>
            </p>
            </form>
        );
    }
  }

  export default QuoteForm;