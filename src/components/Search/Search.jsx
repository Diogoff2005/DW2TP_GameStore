import "./Search.css";
import CardSearch from "../CardSearch/CardSearch";

const Search = ({ games, searchInput }) => {
  const filteredGames = games
    .filter((game) =>
      game.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .slice(0, 5); 

  return (
    <div className="search-popup">
      {filteredGames.length > 0 ? (
        filteredGames.map((game) => (
          <CardSearch 
            key={game.id}
            id={game.id}
            name={game.name}
            price={game.price}
            imagem={game.coverImg}
          />
        ))
      ) : (
        <div className="no-results">No games found</div>
      )}
    </div>
  );
};

export default Search;
