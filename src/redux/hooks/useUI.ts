import { useAppSelector, useAppDispatch } from "../hook";
import {
  selectCurrentPage,
  selectBooksPerPage,
  selectCreatedSort,
  selectIsDeleteDialogOpen,
  selectIsBorrowDialogOpen,
  selectIsEditDialogOpen,
  selectSelectedBookId,
  selectIsSubmitting,
  selectFormErrors,
  setCurrentPage,
  setBooksPerPage,
  setCreatedSort,
  toggleCreatedSort,
  openDeleteDialog,
  closeDeleteDialog,
  openBorrowDialog,
  closeBorrowDialog,
  openEditDialog,
  closeEditDialog,
  setSubmitting,
  setFormError,
  clearFormError,
  clearAllFormErrors,
  resetUIState,
} from "../features/uiSlice";

// Custom hook for UI state management
export const useUI = () => {
  const dispatch = useAppDispatch();

  // Selectors
  const currentPage = useAppSelector(selectCurrentPage);
  const booksPerPage = useAppSelector(selectBooksPerPage);
  const createdSort = useAppSelector(selectCreatedSort);
  const isDeleteDialogOpen = useAppSelector(selectIsDeleteDialogOpen);
  const isBorrowDialogOpen = useAppSelector(selectIsBorrowDialogOpen);
  const isEditDialogOpen = useAppSelector(selectIsEditDialogOpen);
  const selectedBookId = useAppSelector(selectSelectedBookId);
  const isSubmitting = useAppSelector(selectIsSubmitting);
  const formErrors = useAppSelector(selectFormErrors);

  // Actions
  const actions = {
    // Pagination
    setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
    setBooksPerPage: (perPage: number) => dispatch(setBooksPerPage(perPage)),

    // Sorting
    setCreatedSort: (sort: "asc" | "desc") => dispatch(setCreatedSort(sort)),
    toggleCreatedSort: () => dispatch(toggleCreatedSort()),

    // Dialogs
    openDeleteDialog: (bookId: string) => dispatch(openDeleteDialog(bookId)),
    closeDeleteDialog: () => dispatch(closeDeleteDialog()),
    openBorrowDialog: (bookId: string) => dispatch(openBorrowDialog(bookId)),
    closeBorrowDialog: () => dispatch(closeBorrowDialog()),
    openEditDialog: (bookId: string) => dispatch(openEditDialog(bookId)),
    closeEditDialog: () => dispatch(closeEditDialog()),

    // Loading
    setSubmitting: (submitting: boolean) => dispatch(setSubmitting(submitting)),

    // Form errors
    setFormError: (field: string, error: string) =>
      dispatch(setFormError({ field, error })),
    clearFormError: (field: string) => dispatch(clearFormError(field)),
    clearAllFormErrors: () => dispatch(clearAllFormErrors()),

    // Reset
    resetUIState: () => dispatch(resetUIState()),
  };

  return {
    // State
    currentPage,
    booksPerPage,
    createdSort,
    isDeleteDialogOpen,
    isBorrowDialogOpen,
    isEditDialogOpen,
    selectedBookId,

    isSubmitting,
    formErrors,

    // Actions
    ...actions,
  };
};
