const MovieCard = (movie: any) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="inline-block m-2 md:m-3 cursor-pointer w-[350px] group">
      <img
        src={IMAGE_BASE_URL + movie.movie.backdrop_path}
        className="w-[230px] md:w-[340px] object-cover rounded-2xl
        hover:scale-105 border-[1px] border-gray-500 transition-all duration-200 ease-in-out"
        alt=""
      />
      <h2 className="text-sm pt-2 text-gray-400 md:text-[17px]">
        {movie.movie.id % 2 == 0 ? "Trailer" : "Watch Now"}
      </h2>
      <h2
        className="text-sm text-white font-normal mt-1 transition-all 
      md:text-[22px] overflow-hidden group-hover:font-bold"
      >
        {movie.movie.original_title}
      </h2>
    </div>
  );
};

export default MovieCard;
