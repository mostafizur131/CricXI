import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from "../../types";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState<"available" | "selected">(
    "available",
  );

  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);

  const handleButtonType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  // Add More Player
  const handleAddMorePlayer = () => {
    setButtonType("available");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white ">
      <div className="container mx-auto py-8">
        <div className="flex item-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">
            {buttonType === "available"
              ? "Available Players"
              : `Selected Players (${selectedPlayers.length}/6)`}
          </h3>
          <div className="flex w-fit overflow-hidden rounded-full border border-gray-200 bg-white text-xs font-medium">
            <button
              onClick={() => handleButtonType("available")}
              className={`rounded-md border-r-0 ${buttonType === "available" ? "bg-[#DFFF00]" : ""} text-[#111111] px-6 py-3 text-xs font-extrabold  `}
            >
              Available
            </button>
            <button
              onClick={() => handleButtonType("selected")}
              className={`rounded-md border-l-0 ${buttonType === "selected" ? "bg-[#DFFF00] " : ""} text-[#111111] px-6 py-3 text-xs font-extrabold  `}
            >
              Selected{" "}
              <span className="text-red-500"> {selectedPlayers.length}</span>
            </button>
          </div>
        </div>
        {buttonType === "available" ? (
          <AvailablePlayers
            players={players}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
            handleAddMorePlayer={handleAddMorePlayer}
          />
        )}
      </div>
    </div>
  );
};

export default Players;
