import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );

    const json = await data.json();
    const filteredTrailers = json.results.filter(
      (video) => video.type === "Trailer",
    );
    const trailer =
      filteredTrailers.length > 0 ? filteredTrailers[2] : json.results[0];
    console.log(trailer);

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
