import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types";
import { Trash2 } from "lucide-react";

export interface SelectedPlayersCardProps {
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function SelectedPlayersCard({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersCardProps) {
  const handleRemovePlayer = (player: IPlayer) => {
    const remainingPlayers = selectedPlayers.filter((p) => {
      return p.id !== player.id;
    });

    setSelectedPlayers(remainingPlayers);

    // Update Coin
    const updateCoinPrice = coin + player.price;
    setCoin(updateCoinPrice);
  };
  return (
    <div>
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className="flex min-h-[62px] items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2.5 transition-shadow hover:shadow-sm sm:px-4"
        >
          {/* Player Info */}
          <div className="flex min-w-0 items-center gap-3">
            {/* Player Image */}
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-10 sm:w-10">
              <img
                src={player.image}
                alt={player.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name + Style */}
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-slate-900 sm:text-[15px]">
                {player.name}
              </h3>

              <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">
                {player.battingStyle}
              </p>
            </div>
          </div>

          {/* Delete Button */}
          <button
            type="button"
            onClick={() => handleRemovePlayer(player)}
            aria-label={`Remove ${player.name}`}
            className="ml-3 shrink-0 p-1 text-red-400 transition-colors hover:text-red-600 cursor-pointer"
          >
            <Trash2 className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      ))}
    </div>
  );
}
