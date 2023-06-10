import React from 'react';
import { Link } from 'react-router-dom';
import DeckList from './Deck/DeckList';

function Home ({ decks, setDecks }) {
  //the basic components of the home page (a create deck button and a list of the current decks)
  return (
    <div>
      <Link to='/decks/new'>
        <button type='button' className='btn btn-secondary mb-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-plus-square align-text-top'
            viewBox='0 0 16 16'
          >
            <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
            <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
          </svg>{' '}
          Create Deck
        </button>
      </Link>
      <DeckList decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default Home;
