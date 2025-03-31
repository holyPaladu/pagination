import { usePagination } from "../model/usePagination";
import styles from "./Pagination.module.scss";
import Button from "../../../shared/ui/Button/Button";

interface PaginationProps {
  totalPages: number;
  isLooped?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  isLooped = false,
}) => {
  const { currentPage, nextPage, prevPage, getPaginationRange, goToPage } = usePagination(
    totalPages,
    isLooped
  );

  return (
    <article className={styles.pagination}>
      <Button onClick={() => prevPage()} disabled={currentPage === 1 && !isLooped}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2325 4.18414C10.4622 4.423 10.4547 4.80282 10.2159 5.0325L7.06566 8L10.2159 10.9675C10.4547 11.1972 10.4622 11.577 10.2325 11.8159C10.0028 12.0547 9.62299 12.0622 9.38413 11.8325L5.78413 8.4325C5.66648 8.31938 5.59999 8.16321 5.59999 8C5.59999 7.83679 5.66648 7.68062 5.78413 7.5675L9.38413 4.1675C9.62299 3.93782 10.0028 3.94527 10.2325 4.18414Z"
            fill="#626262"
          />
        </svg>
        <span>Back</span>
      </Button>
      {getPaginationRange().map((page) =>
        page === "..." ? (
          <Button>
            <span>...</span>
          </Button>
        ) : (
          <Button
            key={page}
            className={currentPage === page ? styles.active : ""}
            onClick={() => goToPage(page)}
          >
            <span>{page}</span>
          </Button>
        )
      )}
      <Button
        onClick={() => nextPage()}
        disabled={currentPage === totalPages && !isLooped}
      >
        <span>Next</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.76751 11.8159C5.53783 11.577 5.54528 11.1972 5.78414 10.9675L8.93434 8L5.78414 5.0325C5.54528 4.80282 5.53783 4.423 5.76751 4.18413C5.99718 3.94527 6.37701 3.93782 6.61587 4.1675L10.2159 7.5675C10.3335 7.68062 10.4 7.83679 10.4 8C10.4 8.16321 10.3335 8.31938 10.2159 8.4325L6.61587 11.8325C6.37701 12.0622 5.99718 12.0547 5.76751 11.8159Z"
            fill="#626262"
          />
        </svg>
      </Button>
    </article>
  );
};
