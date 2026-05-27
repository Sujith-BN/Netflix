import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPLayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    console.log(data.results);
    dispatch(addMovies(data.results));
  };
  useEffect(() => {
    getNowPLayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
