import "./Search.css";
import Card from "../card/Card";

const Search = ({ games, searchInput }) => {
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="search-popup">
      {filteredGames.length > 0 ? (
        filteredGames.map((game) => (
          <Card 
            key={game.id}
            id={game.id}
            name={game.name}
            price={game.price}
            imagem={game.coverImg }
          />
        ))
      ) : (
        <div className="no-results">No games found</div>
      )}
    </div>
  );
};

export default Search;
