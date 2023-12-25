import { IoChevronForwardSharp } from "react-icons/io5";
import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div className="p-5 px-10 md:px-20">
      {GenreList.genre.map(
        (item: any, index) =>
          index <= 4 && (
            <div className="text-[23px] text-white font-bold">
              <h2 key={item.id}>
                {item.name}{" "}
                <span
                  className="font-normal text-[16px] cursor-pointer
            text-gray-400 float-right flex"
                >
                  VIEW ALL <IoChevronForwardSharp className="text-white ml-1" />{" "}
                </span>
              </h2>
              <MovieList genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
