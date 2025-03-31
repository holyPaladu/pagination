export class PaginationLogic {
  private totalPages: number;
  private currentPage: number;
  private isLooped: boolean;

  constructor(totalPages: number, isLooped = false) {
    this.currentPage = 1;
    this.totalPages = totalPages;
    this.isLooped = isLooped;
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
}
