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
    <div className='card-container m-5 p-0'>
      <h5 className='card-header'>
        Card {cardPositon} of {numberOfCards}{' '}
      </h5>
      <p className='lead p-2 text-center'>
        {isFlipped ? card.back : card.front}
      </p>
      <button
        className='btn btn-secondary m-3 align-center'
        onClick={flipHandler}
      >
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
