import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    </Router>
  );
};

export default App;
