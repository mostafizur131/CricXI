import React from "react";
import {
  CircleUserRound,
  CircleDollarSign,
  Star,
  Tag,
  Trophy,
  Flag,
} from "lucide-react";

import type { IPlayer } from "../../types";

interface PlayerCardProps {
  player: IPlayer;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
              // onClick={() => onChoosePlayer(player)}
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
