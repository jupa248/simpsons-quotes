import React from "react";
import './QuoteCard.css'

function QuoteCard ({ card }) {
    return (
        <div className="QuoteCard">
            <img src={card.image} alt='Simpsons character' />
            <h2>{card.character}</h2>
            <p>{card.quote}</p>
        </div>
        
        );
    }
  
  export default QuoteCard;