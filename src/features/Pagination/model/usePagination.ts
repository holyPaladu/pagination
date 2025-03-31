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

  return { currentPage, nextPage, prevPage };
};
