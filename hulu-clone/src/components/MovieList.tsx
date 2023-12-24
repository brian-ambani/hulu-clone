import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = (genreId: any) => {
  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    GenreMovieListByGenreId();
  }, []);

  const GenreMovieListByGenreId = () => {
    GlobalApi.getMoviesByGenreId(genreId.genreId).then((res: any) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  return (
    <div>
      <div
        className="w-full overflow-scroll scroll-smooth overflow-x-auto
      whitespace-nowrap scrollbar-hide mb-16"
      >
        {movieList.map(
          (item: any, index: any) => index < 7 && <MovieCard movie={item} />
        )}
      </div>
    </div>
  );
};

export default MovieList;
