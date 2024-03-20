import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import useGames, { Platform } from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isloading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <div>{error}</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
        {isloading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GamecardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
