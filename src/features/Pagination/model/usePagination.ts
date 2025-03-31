import { useEffect, useState } from "react";
import { PaginationLogic } from "./PaginationLogic";

export const usePagination = (totalPages: number, isLooped = false) => {
  const [pagination] = useState(() => new PaginationLogic(totalPages, isLooped));
  const [currentPage, setCurrentPage] = useState(pagination.getPage());

  useEffect(() => {
    pagination.goToPage(1);
  }, [totalPages, isLooped]);

  const updatePage = () => setCurrentPage(pagination.getPage());
  const nextPage = () => {
    pagination.nextPage();
    updatePage();
  };
  const prevPage = () => {
    pagination.prevPage();
    updatePage();
  };
  const getPaginationRange = () => pagination.getPaginationRange();
  const goToPage = (page: number) => pagination.goToPage(page);

  return { currentPage, nextPage, prevPage, getPaginationRange, goToPage };
};
