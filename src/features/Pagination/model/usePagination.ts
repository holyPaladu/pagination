import { useState } from "react";
import { PaginationLogic } from "./PaginationLogic";

export const usePagination = (totalPages: number, isLooped = false) => {
  const [pagination] = useState(() => new PaginationLogic(totalPages, isLooped));
  const [currentPage, setCurrentPage] = useState(pagination.getPage());

  const updatePage = () => setCurrentPage(pagination.getPage());

  const nextPage = () => {
    pagination.nextPage();
    updatePage();
  };

  const prevPage = () => {
    pagination.prevPage();
    updatePage();
  };

  const getPaginationRange = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  };

  return { currentPage, nextPage, prevPage, getPaginationRange };
};
