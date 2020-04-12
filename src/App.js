import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm'
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : "Shoplifting is a victimless crime, like punching someone in the dark.",
      character : "Nelson Muntz",
      image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    
    };
  }

  getQuote = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image:data[0].image,
        });
      });
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <QuoteForm />
      <QuoteList />
      <div className = "Btn">
      <DisplayQuote simpsonsQuote={this.state} />
      <button type="button" onClick={this.getQuote}>Get a new quote</button>
      </div>
     
      </div>
    );
  }
}

export default App;
