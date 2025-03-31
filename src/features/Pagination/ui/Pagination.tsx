import { usePagination } from "../model/usePagination";
import styles from "./Pagination.module.scss";
import Button from "../../../shared/ui/Button/Button";

interface PaginationProps {
  totalPages: number;
  isLooped?: boolean;
  step?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  isLooped = false,
  step,
}) => {
  const {
    currentPage,
    nextPage,
    prevPage,
    getPaginationRange,
    goToPage,
    goForward,
    goBackward,
  } = usePagination(totalPages, isLooped);

  return (
    <article className={styles.pagination}>
      {step ? (
        <Button onClick={() => goBackward()}>
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
              d="M12.6325 11.8159C12.4028 12.0547 12.023 12.0622 11.7841 11.8325L8.18412 8.4325C8.06647 8.31938 7.99999 8.16321 7.99999 8C7.99999 7.83679 8.06647 7.68062 8.18412 7.5675L11.7841 4.1675C12.023 3.93782 12.4028 3.94527 12.6325 4.18413C12.8622 4.423 12.8547 4.80282 12.6159 5.0325L9.46565 8L12.6159 10.9675C12.8547 11.1972 12.8622 11.577 12.6325 11.8159ZM7.83249 11.8159C7.60281 12.0547 7.22298 12.0622 6.98412 11.8325L3.38412 8.4325C3.26647 8.31938 3.19999 8.16321 3.19999 8C3.19999 7.83679 3.26647 7.68062 3.38412 7.5675L6.98412 4.1675C7.22298 3.93782 7.60281 3.94527 7.83249 4.18413C8.06216 4.423 8.05471 4.80282 7.81585 5.0325L4.66565 8L7.81585 10.9675C8.05472 11.1972 8.06216 11.577 7.83249 11.8159Z"
              fill="#626262"
            />
          </svg>
        </Button>
      ) : (
        ""
      )}
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
      {getPaginationRange().map((page, index) =>
        page === "..." ? (
          <Button key={index + `${isLooped}`}>
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
      {step ? (
        <Button onClick={() => goForward()}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.38413 10.9675C3.14527 11.1972 3.13782 11.577 3.3675 11.8159C3.59717 12.0547 3.977 12.0622 4.21586 11.8325L7.81586 8.4325C7.93351 8.31938 8 8.16321 8 8C8 7.83679 7.93351 7.68062 7.81586 7.5675L4.21586 4.1675C3.977 3.93782 3.59717 3.94527 3.3675 4.18414C3.13782 4.423 3.14527 4.80282 3.38413 5.0325L6.53433 8L3.38413 10.9675Z"
              fill="#626262"
            />
            <path
              d="M8.18413 10.9675C7.94527 11.1972 7.93782 11.577 8.1675 11.8159C8.39717 12.0547 8.777 12.0622 9.01586 11.8325L12.6159 8.4325C12.7335 8.31938 12.8 8.16321 12.8 8C12.8 7.83679 12.7335 7.68062 12.6159 7.5675L9.01586 4.1675C8.777 3.93782 8.39717 3.94527 8.1675 4.18414C7.93782 4.423 7.94527 4.80282 8.18413 5.0325L11.3343 8L8.18413 10.9675Z"
              fill="#626262"
            />
          </svg>
        </Button>
      ) : (
        ""
      )}
    </article>
  );
};
