import React, { useEffect, useState } from 'react';
import { readDeck, updateDeck } from '../../utils/api';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function EditDeck () {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: '', description: '' });
  const history = useHistory();

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

  const changeHandler = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value
    });
  };

  //on submit call updateDeck
  const submitHandler = async event => {
    event.preventDefault();
    await updateDeck(deck);
    history.goBack();
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
        <Link to='/'>Home</Link> / {deck.name} / Edit Deck
      </nav>
      <h2>Edit Deck</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            id='name'
            name='name'
            value={deck.name}
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <textarea
            id='description'
            rows={4}
            cols={50}
            name='description'
            value={deck.description}
            onChange={changeHandler}
          ></textarea>
        </div>
      </form>
      <Link to={`/decks/${deckId}`}>
        <button className='btn btn-secondary mr-1'>Cancel</button>
      </Link>
      <button className='btn btn-primary ml-1' onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}
