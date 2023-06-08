import React, { useEffect, useState } from 'react';
import { readCard, readDeck, updateCard } from '../../utils/api';
import { useParams, Link, useHistory } from 'react-router-dom';

export default function EditCard () {
  //nav bar with home link / deck name / edit card "cardid"

  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});
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
    async function fetchCards () {
      try {
        const fetchedCards = await readCard(cardId);
        setCard(fetchedCards);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeck();
    fetchCards();
  }, [deckId, cardId]);

  const changeHandler = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value
    });
  };

  //use update api should send user to deck screen
  const submitHandler = async event => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deckId}`);
  };

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link> / {deck.name} / Edit Card {cardId}
      </nav>
      <h2>Edit Card</h2>
      <form className='cardEditForm'>
        <div className='cardEditFront'>
          <label htmlFor='front'>Front</label>
          <textarea
            id='front'
            name='front'
            value={card.front}
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className='cardEditBack'>
          <label htmlFor='back'>Back</label>
          <textarea
            id='back'
            name='back'
            value={card.back}
            onChange={changeHandler}
          ></textarea>
        </div>
      </form>
      <Link to={`/decks/${deckId}`}>
        <button>Cancel</button>
      </Link>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}
