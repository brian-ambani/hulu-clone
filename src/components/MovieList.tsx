import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = (genreId: any) => {
  const elementref = useRef<any>();

  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    GenreMovieListByGenreId();
  }, []);

  const slideRight = () => {
    elementref.current.scrollLeft += 350;
  };

  const slideLeft = () => {
    elementref.current.scrollLeft -= 350;
  };

  const GenreMovieListByGenreId = () => {
    GlobalApi.getMoviesByGenreId(genreId.genreId).then((res: any) => {
      setMovieList(res.data.results);
    });
  };

  return (
    <div className="flex items-center ">
      <IoChevronBackOutline
        className="md:block text-[40px] z-10 text-white bg-black p-2
      cursor-pointer rounded-full mb-[120px]"
        onClick={() => slideLeft()}
      />
      <div
        className="w-full overflow-scroll scroll-smooth overflow-x-auto
      whitespace-nowrap scrollbar-hide mb-16 ml-[-20px] mr-[-20px]"
        ref={elementref}
      >
        {movieList.map(
          (item: any, index: any) => index < 7 && <MovieCard movie={item} />
        )}
      </div>
      <IoChevronForwardOutline
        className="md:block text-[40px] text-white bg-black p-2
      cursor-pointer rounded-full mb-[120px] z-10"
        onClick={() => slideRight()}
      />
    </div>
  );
};

export default MovieList;
