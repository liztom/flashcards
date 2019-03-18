import React, { useState } from 'react';
import Flashcard from './Flashcard';
import PropTypes from 'prop-types';
import './Flashcards.css';


const Flashcards = (props) => {
  const [flipped, setFlipped] = useState(false);
  const { items } = props;
  
  const handleClick = () => {
    setFlipped(true);
  }
  
  const shouldShowHelper = (flipped, index) => {
    return !flipped && index === 0;
  }

  return (
    <div className="Flashcards">
      {items.map((item, index) => (
        <Flashcard
          key={item.id}
          setFlippedState={handleClick}
          showHelper={shouldShowHelper(flipped, index)}
          front={item.front}
          back={item.back}
        />
      ))}
    </div>
  );
}

Flashcard.propTypes = {
  items: PropTypes.array,
}


export default Flashcards;