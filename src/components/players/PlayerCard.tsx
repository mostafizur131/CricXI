import {
  CircleUserRound,
  CircleDollarSign,
  Star,
  Tag,
  Trophy,
  Flag,
} from "lucide-react";

import type { IPlayer } from "../../types";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface PlayerCardProps {
  player: IPlayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedPlayer = () => {
    setIsSelected(true);
    const newPriceCoin = coin - player.price;

    if (selectedPlayers.length > 6) {
      toast.warn(
        "You Can Purchage only 6 Players. You already purchage 6 players",
      );
    } else if (newPriceCoin >= 0) {
      setCoin(newPriceCoin);
      toast.success(`${player.name} is purchage successful.`);
    } else {
      toast.warn("Balance is insufficiant");
    }

    // Selected Players Logic
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg">
        {/* Player Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={player.image}
            alt={player.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Rating */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-gray-800 shadow-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{player.rating}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-3">
          {/* Name */}
          <h2 className="text-lg font-bold text-slate-900">{player.name}</h2>

          <div className="flex justify-between items-center ">
            {/* Country */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 ">
              <Flag className="h-4 w-4 text-emerald-600" />
              <span>{player.country}</span>
            </div>

            {/* Role */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-600">
              <CircleUserRound className="h-4 w-4" />
              <span>{player.role}</span>
            </div>
          </div>

          {/* Player Information */}
          <div className="mt-4 border-b border-gray-200 pb-5">
            {/* Batting Style */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Trophy className="h-4 w-4" />
                <span>Batting Style</span>
              </div>

              <p className="text-sm font-bold text-slate-800">
                {player.battingStyle}
              </p>
            </div>
          </div>

          {/* Price + Button */}
          <div className="flex items-end justify-between gap-4 pt-3">
            {/* Price */}
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Tag className="h-4 w-4" />
                <span>Price</span>
              </div>

              <div className="mt-1 flex items-center gap-1">
                <CircleDollarSign className="h-5 w-5 text-slate-700" />

                <span className="text-lg font-extrabold text-slate-900">
                  ${player.price}
                </span>
              </div>
            </div>

            {/* Choose Player */}
            <button
              type="button"
              onClick={() => handleSelectedPlayer()}
              disabled={isSelected || selectedPlayers.length > 6}
              className={`rounded-xl border  px-3 py-2 text-sm font-bold ${isSelected === true ? "border-emerald-500 bg-emerald-100 text-emerald-500" : "border-slate-900 bg-slate-900 text-white"} ${selectedPlayers.length > 6 ? "border-slate-300 bg-slate-100 text-slate-500" : ""}`}
            >
              {isSelected
                ? "Selected"
                : selectedPlayers.length >= 6
                  ? "Out of Range"
                  : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
