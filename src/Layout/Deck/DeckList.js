import React from 'react';
import Deck from './Deck';

function DeckList ({ decks, setDecks, deleteHandler }) {
  return (
    <div>
      {decks.map((deck, index) => (
        <Deck
          deleteHandler={() => deleteHandler(index)}
          key={index}
          deck={deck}
          setDecks={setDecks}
        />
      ))}
    </div>
  );
}

export default DeckList;
