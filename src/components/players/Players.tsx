import React, { use } from "react";
import type { IPlayer } from "../../types";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="bg-white ">
      <div className="container mx-auto py-8">
        <AvailablePlayers players={players} />
      </div>
    </div>
  );
};

export default Players;
