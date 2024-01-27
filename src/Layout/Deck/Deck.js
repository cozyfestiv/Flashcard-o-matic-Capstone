import { Link } from 'react-router-dom';
import { deleteDeck } from '../../utils/api';

function Deck ({ deck }) {
  const handleDelete = async deckId => {
    const result = window.confirm('Are you sure you want to delete this deck?');
    if (result) {
      deleteDeck(deckId).then(window.location.reload());
    }
  };

  return (
    <div className='card mb-3 mr-5 ml-5 '>
      <div className='title-container card-header p-2 m-0'>
        <h3 className='card-title pl-2 pt-2'>{deck.name}</h3>
        <div className='card-subtitle pt-3 pr-2'>
          {deck.cards ? deck.cards.length : 0} cards
        </div>
      </div>
      <p className='card-text card-body'>{deck.description}</p>
      <div className='d-flex justify-content-between container-fluid'>
        <div>
          <Link to={`/decks/${deck.id}`}>
            <button type='button' className='btn btn-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-eye align-text-top mr-1'
                viewBox='0 0 16 16'
              >
                <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
              </svg>
              View
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button type='button' className='btn btn-primary m-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-journal-bookmark-fill align-text-top mr-1'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z'
                />
                <path d='M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z' />
                <path d='M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z' />
              </svg>
              Study
            </button>
          </Link>
        </div>
        <button
          type='button'
          className='btn btn-danger m-2'
          onClick={() => handleDelete(deck.id)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-trash-fill '
            viewBox='0 0 16 16'
          >
            <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Deck;
