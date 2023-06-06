import React from 'react';
import Card from './Card';

function CardList ({ cards, deckId }) {
  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} card={card} id={card.id} deckId={deckId} />
      ))}
    </div>
  );
}

export default CardList;
