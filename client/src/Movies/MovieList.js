import React from 'react';
import MovieCard from './MovieCard'

const MovieList = props => {

  //console.log(props.movies)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return (
    <MovieCard movie={ movie }/>
  )
}

export default MovieList;
