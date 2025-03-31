import { useEffect, useState } from "react";
import { PaginationLogic } from "./PaginationLogic";

export const usePagination = (totalPages: number, isLooped = false, step: number = 5) => {
  const [pagination] = useState(() => new PaginationLogic(totalPages, isLooped, step));
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
  const goToPage = (page: number) => {
    pagination.goToPage(page);
    updatePage();
  };

  const goForward = () => {
    pagination.goForward();
    updatePage();
  };
  const goBackward = () => {
    pagination.goBackward();
    updatePage();
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    getPaginationRange,
    goToPage,
    goForward,
    goBackward,
  };
};
