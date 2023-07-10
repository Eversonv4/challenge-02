import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SiderBarProps {
  genres: GenreResponseProps[];
  handleGenre: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({
  genres,
  handleGenre,
  selectedGenreId,
}: SiderBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
