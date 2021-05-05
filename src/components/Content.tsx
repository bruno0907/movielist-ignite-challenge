import { Header } from '../components/Header'
import { MovieList } from './MovieList';

interface MovieProps {
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;  
  }>,
  selectedGenre: {
    title: string;
  }
}

export function Content({ movies, selectedGenre }: MovieProps) {  
  return(
    <div className="container">
      <Header>{selectedGenre.title}</Header>
      <MovieList movies={movies} />
    </div>
  )
}