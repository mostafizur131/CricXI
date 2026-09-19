import type { IPlayer } from "../../types";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: IPlayer[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {players.map((player: IPlayer) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
