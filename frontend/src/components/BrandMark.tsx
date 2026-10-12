import React from "react";
import clsx from "clsx";
import { Logo } from "./Logo";
import { BRAND_NAME, PRODUCT_NAME } from "../brand";

export const BrandMark: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <span className="flex items-center gap-3">
    <Logo className={compact ? "h-8 w-8" : "h-10 w-10"} />
    <span className="flex flex-col gap-0.5 leading-none">
      <span
        data-brand="name"
        className={clsx(
          "font-sans font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400",
          compact ? "text-[9px]" : "text-[10px]",
        )}
      >
        {BRAND_NAME}
      </span>
      <span
        data-brand="product"
        className={clsx(
          "font-display font-extrabold tracking-tight text-slate-900 dark:text-white",
          compact ? "text-xl" : "text-2xl",
        )}
      >
        {PRODUCT_NAME}
      </span>
    </span>
  </span>
);
