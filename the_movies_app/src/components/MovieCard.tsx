import React from "react";
import { Movie } from '../pages/HomePage'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type MovieCardProps = {
    movie: Movie;
}

export const MovieCard:React.FC<MovieCardProps> = ({movie}) => {
    return (
        <div className="flex space-x-3">
        <img src={`${IMAGE_URL}${movie.poster_path}`} 
        alt=""
        className="w-20 h-50 object-cover rounded-xl"
        />
        <div className="mt-4">
          <div className="text-lg flex flex-row font-semibold">{movie.title}</div>
          <div className="text gray-500 truncate-2-lines">
            {movie.overview}
          <div className="text-xs text-gray-400">
            {`평점: ${movie.vote_average}`}
          </div>

        </div>
      </div>
    </div>
    )
}