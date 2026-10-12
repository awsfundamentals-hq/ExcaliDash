import React from "react";
import logoUrl from "../assets/awsf-logo.svg";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img src={logoUrl} alt="" className={className} draggable={false} />
);
