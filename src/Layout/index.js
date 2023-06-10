import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { listDecks } from '../utils/api';

import Home from './Home';
import Header from './Header';
import NotFound from './NotFound';
import StudyDeck from './Deck/StudyDeck';
import CreateDeck from './Deck/CreateDeck';
import ViewDeck from './Deck/ViewDeck';
import EditDeck from './Deck/EditDeck';
import EditCard from './Card/EditCard';
import AddCard from './Card/AddCard';

function Layout () {
  const [decks, setDecks] = useState([]);

  //lookup why I'm using useEffect again
  useEffect(() => {
    async function fetchDecks () {
      try {
        const response = await listDecks();
        setDecks(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDecks();
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path='/'>
            <Home decks={decks} setDecks={setDecks} />
          </Route>

          <Route path='/decks/:deckId/study'>
            <StudyDeck />
          </Route>

          <Route exact path='/decks/new'>
            <CreateDeck setDecks={setDecks} />
          </Route>

          <Route path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>

          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>

          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>

          <Route path='/decks/:deckId'>
            <ViewDeck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
