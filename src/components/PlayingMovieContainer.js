import React from "react";
import BackgroundMovie from "./BackgroundMovie";
import BackgroundMovieTitle from "./BackgroundMovieTitle";
import { useSelector } from "react-redux";

const PlayingMovieContainer = () => {
  const movies = useSelector((state) => state.movie.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[3];

  return (
    <div className="relative h-screen">
      <BackgroundMovie movieId={mainMovie.id} />

      <BackgroundMovieTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
      />
    </div>
  );
};

export default PlayingMovieContainer;
