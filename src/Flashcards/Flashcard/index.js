import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Flashcard.css';

const Content = (props) => {
  const { type, display, options } = props;
  switch(type) {
    case 'image': 
      const alt = options ? options.alt : '';
      return <img className="Flashcard__image" src={display} alt={alt}></img>;
    case 'string':
      return display.length > 100 ? <p className="Flashcard__text">{display}</p> : <h3>{display}</h3>;
    default:
      return <div>{display}</div>;
    }
}

const Flashcard = (props) => {
  const [showFront, setShowFront] = useState(true);
  const { front, back, setFlippedState, showHelper } = props;
  
  const handleClick = () => {
    setFlippedState();
    setShowFront(!showFront)
  }

  return (
    <div className={classnames('Flashcard', { 'Flashcard__top': showFront, 'Flashcard--flipped': !showFront })} onClick={handleClick}>
      <div className="Flashcard__content">
        {showFront ? (
          <div className="Flashcard--front">
            <Content
              type={front.type}
              display={front.display}
              options={front.options}
            />
          </div>
        ) : (
          <div className="Flashcard--back">
            <Content
              type={back.type} 
              display={back.display}
              options={back.options}
            />
          </div>
        )}
        <div className="Flashcard__flipper"> 
          {showHelper && (
            <div className="Flashcard__helper"><em>Click to flip over</em></div>
          )}
          <i className="icon icon__flip"></i>
        </div>
      </div>
    </div>
  )
}

Flashcard.propTypes = {
  front: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'image']),
    display: PropTypes.string,
    options: PropTypes.shape({
      alt: PropTypes.string
    })
  }).isRequired,
  back: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'image']),
    display: PropTypes.string,
    options: PropTypes.shape({
      alt: PropTypes.string
    })
  }).isRequired,
  handleClick: PropTypes.func,
  showHelper: PropTypes.bool
}

export default Flashcard;
export { Content };