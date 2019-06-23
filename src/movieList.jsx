import React from  'react';
import movieListData from './data/movieListData.js';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
  return (
    <div className='movieList'>
      <MovieListEntry movie={movieListData[0]}/>
    </div>
  )
}

export default MovieList;