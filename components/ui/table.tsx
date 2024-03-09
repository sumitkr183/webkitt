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

const Head = ({ children, className }: ITable) => {
  return <thead className={clsx(className)}>{children}</thead>;
};

const Body = ({ children, className }: ITable) => {
  return <tbody className={clsx(className)}>{children}</tbody>;
};

Table.Head = Head;
Table.Body = Body;

export default Table;
