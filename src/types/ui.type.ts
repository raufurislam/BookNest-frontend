export interface UIState {
  currentPage: number;
  booksPerPage: number;

  createdSort: "asc" | "desc";

  isDeleteDialogOpen: boolean;
  isBorrowDialogOpen: boolean;
  isEditDialogOpen: boolean;
  selectedBookId: string | null;

  sidebarOpen: boolean;
  scrolled: boolean;

  isSubmitting: boolean;

  formErrors: Record<string, string>;
}
