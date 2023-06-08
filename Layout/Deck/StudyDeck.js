import React, { useEffect, useState } from 'react';
import { readDeck } from '../../utils/api';
import { useParams, Link, useHistory } from 'react-router-dom';
import StudyCard from '../Card/StudyCard';

export default function StudyDeck () {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [numberOfCards, setnumberOfCards] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardPositon, setCardPosition] = useState(1);
  const [card, setCard] = useState(0);
  const history = useHistory();

  useEffect(() => {
    async function fetchDeck () {
      try {
        const fetchedDeck = await readDeck(deckId);
        setDeck(fetchedDeck);
        setCards(fetchedDeck.cards);
        setnumberOfCards(fetchedDeck.cards.length);
        setCard(fetchedDeck.cards[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDeck();
  }, [deckId]);

  //flip handler tells us if the front or back of each card should be rendered
  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCardHandler = () => {
    setIsFlipped(!isFlipped);
    //setCardPosition(cardPositon + 1);
    if (cardPositon !== numberOfCards) {
      setCardPosition(cardPositon + 1);
      setCard(cards[cardPositon]);
    } else {
      const restartDeck = window.confirm(
        "Restart cards? \n Click 'cancel' to return to the home page"
      );
      if (!restartDeck) {
        history.push('/');
      } else {
        //change card number
        setCardPosition(1);
        //change card rendered
        setCard(cards[0]);
      }
    }
  };

  return (
    <div>
      <nav>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-house-door-fill m-1 align-text-top text-primary'
          viewBox='0 0 16 16'
        >
          <path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z' />
        </svg>
        <Link to='/'>Home</Link> / / Study
      </nav>
      <h2>
        <span> Study </span>: <span>{deck.name}</span>
      </h2>
      <div>
        {numberOfCards <= 2 ? (
          <div>
            <h5>Not enough cards.</h5>
            <p>
              You need at least 3 cards to study. There are {numberOfCards}{' '}
              cards in this deck.
            </p>
            <Link to={`/decks/${deckId}/cards/new`}>
              <button type='button' className='btn btn-primary'>
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
                Add Cards
              </button>
            </Link>
          </div>
        ) : (
          <StudyCard
            card={card}
            isFlipped={isFlipped}
            flipHandler={flipHandler}
            nextCardHandler={nextCardHandler}
            cardPositon={cardPositon}
            numberOfCards={numberOfCards}
          />
        )}
      </div>
    </div>
  );
}
