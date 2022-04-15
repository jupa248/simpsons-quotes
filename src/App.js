import './App.css';
import { useState } from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const sampleCard = {
  quote:
        'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
      character: 'Homer Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939'

    };


function App() {
  const [card, setCard] = useState(sampleCard);
  const getQuote = () => {
    
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setCard(data[0]);
      })
  }
  return (
    <div className="App">
      <QuoteCard card={card} />
      <button type='button' onClick={getQuote}>
        More Simpson's quotes
        </button>
    </div>
  );
}

export default App;
