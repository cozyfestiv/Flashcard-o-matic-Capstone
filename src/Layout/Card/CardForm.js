import React from 'react';
import { useHistory } from 'react-router-dom';

function CardForm ({ flashCard, handleChange, handleSubmit }) {
  const history = useHistory();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='front'>Front</label>
        <textarea
          type='text'
          className='form-control'
          id='front'
          placeholder='Add the front of the card'
          onChange={handleChange}
          value={flashCard ? flashCard.front : EventTarget.value}
        ></textarea>
      </div>

      <div>
        <label htmlFor='back'>Back</label>
        <textarea
          type='text'
          className='form-control'
          id='back'
          placeholder='Add the back of the card'
          onChange={handleChange}
          value={flashCard ? flashCard.back : EventTarget.value}
        ></textarea>
        <button
          type='button'
          onClick={() => history.goBack()}
          className='btn btn-secondary mr-2'
        >
          {flashCard ? 'cancel' : 'done'}
        </button>

        <button type='submit' className='btn btn-primary'>
          {/* can also be done as a const but this is a more reacty way */}
          {flashCard ? 'add' : 'submit'}
        </button>
      </div>
    </form>
  );
}

export default CardForm;
