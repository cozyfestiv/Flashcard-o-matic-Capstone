import React from 'react';

function StudyCard ({
  card,
  isFlipped,
  flipHandler,
  nextCardHandler,
  cardPositon,
  numberOfCards
}) {
  return (
    <div className='card-container'>
      <h5>
        Card {cardPositon} of {numberOfCards}{' '}
      </h5>
      <p>{isFlipped ? card.back : card.front}</p>
      <button className='btn btn-secondary mr-2' onClick={flipHandler}>
        Flip
      </button>
      {isFlipped && (
        <button className='btn btn-primary mr-2' onClick={nextCardHandler}>
          Next
        </button>
      )}
    </div>
  );
}

export default StudyCard;
