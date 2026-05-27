import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import PlayingMovieContainer from "./PlayingMovieContainer";

const Browse = () => {
  useGetNowPlayingMovies();

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <PlayingMovieContainer />
    </div>
  );
};

export default Browse;
