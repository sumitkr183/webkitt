import React from "react";
import clsx from "clsx";
import { usePagination } from "@/hooks/user-pagination";

interface IPagination {
  className?: string;
  pageSize: number;
  currentPage: number;
  totalCount: number;
  siblingCount?: number;
  onPageChange: (value: number | string) => void;
}

const Pagination = (props: IPagination) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  }) as number[];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={clsx("pagination justify-content-end mg-t-20 mg-b-0", {
        [className as string]: className,
      })}
    >
      <li
        className={clsx("page-item", { disabled: currentPage === 1 })}
        onClick={onPrevious}
      >
        <span className="page-link cursor-pointer">Prev</span>
      </li>
      {paginationRange.map((pageNumber: number, index: number) => {        
        if (typeof pageNumber === "string") {
          return (
            <li key={index} className="page-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={clsx("page-item", {
              active: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <span className="page-link cursor-pointer">{pageNumber}</span>
          </li>
        );
      })}
      <li
        className={clsx("page-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <span className="page-link cursor-pointer">Next</span>
      </li>
    </ul>
  );
};

export default Pagination;
