import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {players.map((player: IPlayer) => (
        <PlayerCard
          key={player.id}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
