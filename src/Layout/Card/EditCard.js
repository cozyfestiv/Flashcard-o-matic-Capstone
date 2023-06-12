import React, { useEffect, useState } from 'react';
import { readCard, readDeck, updateCard } from '../../utils/api';
import { useParams, Link, useHistory } from 'react-router-dom';
import CardForm from './CardForm';

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

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.id]: target.value
    });
  };

  //use update api should send user to deck screen
  const handleSubmit = async event => {
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
      <CardForm
        flashCard={card}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {/* the javascript is being referred to with this name of the prop that were passing into ie prop=thing on this page */}
    </div>
  );
}
