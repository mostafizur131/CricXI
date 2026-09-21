import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types";

import SelectedPlayersCard from "./SelectedPlayersCard";

interface SelectedPlayersProps {
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  handleAddMorePlayer: () => void;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
  handleAddMorePlayer,
}: SelectedPlayersProps) => {
  return (
    <div>
      {/* Selected Players */}
      {selectedPlayers.length === 0 ? (
        <div className="w-ful min-h-40 text-center flex flex-col gap-2 items-center justify-center">
          <h2 className="text-2xl font-bold text-red-700">
            No Player Is Selected
          </h2>
          <p className="text-slate-500">
            Please go to the players available section and select player!
          </p>
        </div>
      ) : (
        <div>
          <SelectedPlayersCard
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        </div>
      )}

      {/* Add More Player */}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleAddMorePlayer}
          className="rounded-lg border border-gray-500 bg-white p-0.75 transition-all hover:border-slate-900"
        >
          <span className="block rounded-md border border-gray-700 bg-lime-400 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-lime-300 sm:px-4 sm:py-2">
            Add More Player
          </span>
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
