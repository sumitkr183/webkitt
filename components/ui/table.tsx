import clsx from "clsx";
import React from "react";

interface ITable {
  children: React.ReactNode;
  className?: string;
}

const Table = ({ children, className }: ITable) => {
  return (
    <div className="table-responsive">
      <table className={clsx("table table-hover mg-b-0", className)}>
        {children}
      </table>
    </div>
  );
};

export default Table;
