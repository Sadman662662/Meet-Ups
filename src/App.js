import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AllMeetUpsPage from './pages/AllMeeUps';
import FavouritesPage from './pages/Favourites';
import NewMeetUpsPage from './pages/NewMtUps';

function App() {
  return (
    <Layout>
    <Switch>
    <Route path='/' exact>
      <AllMeetUpsPage/>
    </Route>
    <Route path='/favourites'>
      <FavouritesPage/>
    </Route>
    <Route path='/new-meetups'>
      <NewMeetUpsPage/>
    </Route>
    </Switch>
    </Layout>
  );              
}

export default App;
