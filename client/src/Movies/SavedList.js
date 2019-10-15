import React from 'react';

import { Link } from "react-router-dom";


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
      <Link exact className="home-button" to="/">Home</Link> 
      {/* makes it so that the Home button is a link that always returns users to the home page */}
    </div>
  </div>
);

export default SavedList;
