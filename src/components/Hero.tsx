import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const Hero = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    GlobalApi.getPopularMovies.then((res: any) => {
      const results = res.data.results;
      const random = Math.floor(Math.random() * results.length);
      setMovieList(results[random]);
    });
  };
  return (
    <div>
      <div
        className=" absolute h-[85vh] bg-gradient-to-t
        from-[#1e2126] via-transparent to-transparent w-full"
      ></div>
      <div
        className="absolute mt-[400px] md:mt[350px]
      px-10 md:px-24"
      >
        <h2 className="text-white text-[19px] lg:text-[27px]">
          Watch only on Hulu
        </h2>
        <h2
          className="text-white text-[36px]
        lg:text-[47px] font-bold"
        >
          {movieList.original_title}
        </h2>
        <div className="flex gap-5 mt-5">
          <button>PLAY</button>
          <button
            className="bg-transparent border-2 border-gray-700
          text-white cursor-pointer px-5 py-2 rounded-md hover:border-gray-500"
          >
            DETAILS
          </button>
        </div>
      </div>
      <img
        src={IMAGE_BASE_URL + movieList.backdrop_path}
        alt=""
        width={1920}
        height={1080}
        className="h-[85vh] object-cover"
      />
    </div>
  );
};

export default Hero;
