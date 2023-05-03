import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <h2>{game.name}</h2>
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
