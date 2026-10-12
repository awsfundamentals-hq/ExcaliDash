import React from "react";
import lightsailIconUrl from "../assets/lightsail.svg";
import { BADGE_LEAD, BADGE_PRICE, BADGE_URL, UPSTREAM_URL } from "../brand";

export const LightsailBadge: React.FC = () => (
  <div className="flex flex-col gap-1.5">
    <a
      href={BADGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 rounded-xl border border-indigo-500/25 bg-indigo-500/10 px-2.5 py-2 text-xs font-semibold leading-tight text-slate-700 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/15 dark:text-slate-200"
    >
      <img
        src={lightsailIconUrl}
        alt=""
        className="h-7 w-7 shrink-0 rounded-lg"
        draggable={false}
      />
      <span>
        {BADGE_LEAD}{" "}
        <span className="block font-bold text-indigo-600 dark:text-indigo-500">
          {BADGE_PRICE}
        </span>
      </span>
    </a>
    <a
      href={UPSTREAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="pl-1 text-[11px] text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
    >
      Based on ExcaliDash
    </a>
  </div>
);
