import React, { use, useState } from "react";
import type { IPlayer } from "../../types";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState("available");

  const handleButtonType = (type: string) => {
    setButtonType(type);
  };

  return (
    <div className="bg-white ">
      <div className="container mx-auto py-8">
        <div className="flex item-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">
            Available Players
          </h3>
          <div>
            <button
              onClick={() => handleButtonType("available")}
              className={`rounded-lg border border-gray-200 border-r-none ${buttonType === "available" ? "bg-[#DFFF00]" : ""} text-[#111111] px-6 py-3 text-xs font-extrabold  `}
            >
              Available
            </button>
            <button
              onClick={() => handleButtonType("selected")}
              className={`rounded-lg border border-gray-200 border-l-none ${buttonType === "selected" ? "bg-[#DFFF00] " : ""} text-[#111111] px-6 py-3 text-xs font-extrabold  `}
            >
              Selected
            </button>
          </div>
        </div>
        <AvailablePlayers players={players} />
      </div>
    </div>
  );
};

export default Players;
