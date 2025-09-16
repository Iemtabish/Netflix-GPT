import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { genAI, model } from "../utils/openAI"; 

const TMDB_API_KEY = "4805f59049c8030df1b65dbb890cb580"; 

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [movies, setMovies] = useState([]);


  const fetchMovieDetails = async (movieName) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieName)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results[0]; 
  };


  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system & suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Conjuring, Sholay, Avengers, Maa, Don";

    try {
      let result;
      try {
        result = await model.generateContent(gptQuery);
      } catch (error) {
        if (error.message.includes("503")) {
          console.warn("Gemini flash servers busy (503). Retrying in 2s...");
          await new Promise((res) => setTimeout(res, 2000));
          result = await model.generateContent(gptQuery); 
        } else if (error.message.includes("429")) {
          console.warn("Quota exceeded on flash (429). Switching to pro...");
          const proModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
          result = await proModel.generateContent(gptQuery);
        } else {
          throw error;
        }
      }

      const response = await result.response;
      const text = response.text(); 
      const movieNames = text.split(",").map((m) => m.trim());

    
      const movieDetails = await Promise.all(
        movieNames.map((name) => fetchMovieDetails(name))
      );

      setMovies(movieDetails.filter(Boolean));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center pt-[5%] items-center">
      {}
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg mb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>

      {}
      <div className="grid grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="w-40 text-center">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-md"
            />
            <p className="text-white mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptSearch;
