import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movie list", movies);

  return (
    <div className="px-6">
        <h1 className="text-2xl font-bold py-3  text-white">{title}</h1>
      <div className="flex cursor-pointer overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;


