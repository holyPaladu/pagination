import { usePagination } from "../model/usePagination";
import styles from "./Pagination.module.scss";
import Button from "../../../shared/ui/Button/Button";
import { ArrowDoubleIcon } from "../../../shared/ui/icon/ArrowDouble";
import { ArrowIcon } from "../../../shared/ui/icon/Arrow";

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
      {step && (
        <Button onClick={() => goBackward()}>
          <ArrowDoubleIcon />
        </Button>
      )}
      <Button onClick={() => prevPage()} disabled={currentPage === 1 && !isLooped}>
        <ArrowIcon />
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
        <ArrowIcon className={styles.rotate} />
      </Button>
      {step && (
        <Button onClick={() => goForward()}>
          <ArrowDoubleIcon className={styles.rotate} />
        </Button>
      )}
    </article>
  );
};
