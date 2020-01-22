import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/Movie/:id" />
      />
      </div>
    </Router>
  );
};

export default App;
