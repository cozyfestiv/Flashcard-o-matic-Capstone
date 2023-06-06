import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';
import { Link } from 'react-router-dom';

function AddCard () {
  const initialFormState = {
    front: '',
    back: ''
  };

  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({ ...initialFormState });

  useEffect(() => {
    async function fetchDeck () {
      try {
        const fetchedDeck = await readDeck(deckId);
        setDeck(fetchedDeck);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeck();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
      deckId
    });
  };

  const submitHandler = async event => {
    event.preventDefault();
    await createCard(deckId, card);
    setCard(initialFormState);
  };

  return (
    <div>
      <nav>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-house-door-fill  mr-1 align-text-top text-primary'
          viewBox='0 0 16 16'
        >
          <path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z' />
        </svg>
        <Link to='/'>Home</Link> / {deck.name} / Add Card
      </nav>
      <h3>
        <span> {deck.name} </span> : <span>Add Card </span>
      </h3>
      <form>
        <div>
          <label>Front</label>
          <textarea
            id='front'
            name='front'
            placeholder='Front side of card'
            value={card.front}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Back</label>
          <textarea
            id='back'
            name='back'
            placeholder='Back side of card'
            value={card.back}
            onChange={handleChange}
          ></textarea>
        </div>
        <Link to={`/decks/${deckId}`}>
          <button className='btn btn-secondary m-1'>Done</button>
        </Link>
        <button className='btn btn-primary m-1' onClick={submitHandler}>
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCard;
