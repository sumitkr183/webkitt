"use client";

import { Tooltip } from "react-tooltip";

const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children} 
      <Tooltip id="delete" place="bottom" />
      <Tooltip id="edit" place="bottom" />
      <Tooltip id="view" place="bottom" />
      <Tooltip id="collapse" place="right" />
    </>
  );
};

export default TooltipProvider;
