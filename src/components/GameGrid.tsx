import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import useGames from "../hooks/games";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
