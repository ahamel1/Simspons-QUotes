import React from 'react';
import './DisplayQuote.css';

const DisplayQuote = ({simpsonsQuote}) => {
    return (
        <figure className="DisplayQuote">
        <img 
            src={simpsonsQuote.image}
            alt={simpsonsQuote.character} 
        />
        <figcaption>
            <blockquote>{simpsonsQuote.quote}</blockquote>
            <p>
                <cite>{simpsonsQuote.character}</cite>
            </p>            
        </figcaption>
    </figure>
    );
}
export default DisplayQuote;