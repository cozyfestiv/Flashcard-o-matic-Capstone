import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createDeck } from '../../utils/api';

function CreateDeck ({ setDecks }) {
  const history = useHistory();
  const initialFormState = {
    name: '',
    description: ''
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const submitHandler = async event => {
    event.preventDefault();
    //you use useEffect when you need to initially grab something or update something whenever a
    // state is changed, in this case you're only using it when the form is submitted
    const deck = await createDeck(formData);
    //this is another way of accessing decks without passing in decks
    setDecks(decks => [...decks, deck]);
    //clear the form
    setFormData(initialFormState);
    //then go to the new deck
    history.push(`/decks/${deck.id}`);
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
        <Link to='/'>Home</Link> / Create Deck
      </nav>
      <h2>Create Deck</h2>
      <form id='myForm' onSubmit={submitHandler}>
        <label htmlFor='deckname'>
          Name
          <input
            type='text'
            id='deckname'
            name='name'
            className='w-100'
            placeholder='Deck Name'
            onChange={changeHandler}
            value={formData.name}
          />
        </label>

        <label htmlFor='deckdescription'>
          Description
          <textarea
            type='text'
            rows={4}
            cols={50}
            id='deckdescription'
            name='description'
            placeholder='Brief description of the deck'
            onChange={changeHandler}
            value={formData.description}
          />
        </label>

        <div class='button-row'>
          <Link to='/'>
            <button className='btn btn-secondary'>Cancel</button>
          </Link>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
