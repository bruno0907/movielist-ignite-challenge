import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, selectedGenreId, handleClickButton }: GenreResponseProps) {
  return(
    <nav className="sidebar">
      <p>Watch<span>Me</span></p>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}