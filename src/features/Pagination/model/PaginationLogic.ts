export class PaginationLogic {
  private totalPages: number;
  private currentPage: number;
  private isLooped: boolean;
  private step: number;

  constructor(totalPages: number, isLooped = false, step: number = 5) {
    this.currentPage = 1;
    this.totalPages = totalPages;
    this.isLooped = isLooped;
    this.step = step;
  }

  getPage() {
    return this.currentPage;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (this.isLooped) {
      this.currentPage = 1;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    } else if (this.isLooped) {
      this.currentPage = this.totalPages;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPaginationRange(): (number | "...")[] {
    const range: (number | "...")[] = [];

    if (this.totalPages <= 6) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      range.push(1, 2, 3, "...", this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      range.push(1, "...", this.totalPages - 2, this.totalPages - 1, this.totalPages);
    } else {
      range.push(
        1,
        "...",
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        "...",
        this.totalPages
      );
    }

    return range;
  }

  goForward() {
    if (this.currentPage + this.step <= this.totalPages) {
      this.currentPage += this.step;
    } else if (this.isLooped) {
      this.currentPage = ((this.currentPage + this.step - 1) % this.totalPages) + 1;
    } else {
      this.currentPage = this.totalPages;
    }
  }

  goBackward() {
    if (this.currentPage - this.step >= 1) {
      this.currentPage -= this.step;
    } else if (this.isLooped) {
      this.currentPage =
        this.totalPages - ((this.step - this.currentPage) % this.totalPages);
    } else {
      this.currentPage = 1;
    }
  }
}
