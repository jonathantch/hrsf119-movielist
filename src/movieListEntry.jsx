import React from  'react';

var MovieListEntry = (props) => {
    return (
        <div className = 'MovieListEntry'>{props.movie.title}/></div>
    )
}

export default MovieListEntry;