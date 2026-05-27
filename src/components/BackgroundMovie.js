import React from "react";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const BackgroundMovie = ({ movieId }) => {
  useGetMovieTrailer(movieId);

  const trailerVideo = useSelector((state) => state.movie.movieTrailer);

  if (!trailerVideo) return null;

  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        className="w-screen h-screen scale-150 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundMovie;
