import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define the UI state interface
interface UIState {
  // Pagination state
  currentPage: number;
  booksPerPage: number;

  // Sorting state
  createdSort: "asc" | "desc";

  // Modal/Dialog states
  isDeleteDialogOpen: boolean;
  isBorrowDialogOpen: boolean;
  isEditDialogOpen: boolean;
  selectedBookId: string | null;

  // Navigation state
  sidebarOpen: boolean;
  scrolled: boolean;

  // Loading states
  isSubmitting: boolean;

  // Form states
  formErrors: Record<string, string>;
}

// Initial state
const initialState: UIState = {
  // Pagination
  currentPage: 1,
  booksPerPage: 10,

  // Sorting
  createdSort: "desc",

  // Modals
  isDeleteDialogOpen: false,
  isBorrowDialogOpen: false,
  isEditDialogOpen: false,
  selectedBookId: null,

  // Navigation
  sidebarOpen: false,
  scrolled: false,

  // Loading
  isSubmitting: false,

  // Form errors
  formErrors: {},
};

// Create the slice
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Pagination actions
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setBooksPerPage: (state, action: PayloadAction<number>) => {
      state.booksPerPage = action.payload;
    },

    // Sorting actions
    setCreatedSort: (state, action: PayloadAction<"asc" | "desc">) => {
      state.createdSort = action.payload;
    },

    toggleCreatedSort: (state) => {
      state.createdSort = state.createdSort === "asc" ? "desc" : "asc";
    },

    // Modal actions
    openDeleteDialog: (state, action: PayloadAction<string>) => {
      state.isDeleteDialogOpen = true;
      state.selectedBookId = action.payload;
    },

    closeDeleteDialog: (state) => {
      state.isDeleteDialogOpen = false;
      state.selectedBookId = null;
    },

    openBorrowDialog: (state, action: PayloadAction<string>) => {
      state.isBorrowDialogOpen = true;
      state.selectedBookId = action.payload;
    },

    closeBorrowDialog: (state) => {
      state.isBorrowDialogOpen = false;
      state.selectedBookId = null;
    },

    openEditDialog: (state, action: PayloadAction<string>) => {
      state.isEditDialogOpen = true;
      state.selectedBookId = action.payload;
    },

    closeEditDialog: (state) => {
      state.isEditDialogOpen = false;
      state.selectedBookId = null;
    },

    // Navigation actions
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },

    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.scrolled = action.payload;
    },

    // Loading actions
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },

    // Form error actions
    setFormError: (
      state,
      action: PayloadAction<{ field: string; error: string }>,
    ) => {
      state.formErrors[action.payload.field] = action.payload.error;
    },

    clearFormError: (state, action: PayloadAction<string>) => {
      delete state.formErrors[action.payload];
    },

    clearAllFormErrors: (state) => {
      state.formErrors = {};
    },

    // Reset all UI state
    resetUIState: () => initialState,
  },
});

// Export actions
export const {
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
  setSidebarOpen,
  toggleSidebar,
  setScrolled,
  setSubmitting,
  setFormError,
  clearFormError,
  clearAllFormErrors,
  resetUIState,
} = uiSlice.actions;

// Export reducer
export default uiSlice.reducer;

// Export selectors
export const selectCurrentPage = (state: { ui: UIState }) =>
  state.ui.currentPage;
export const selectBooksPerPage = (state: { ui: UIState }) =>
  state.ui.booksPerPage;
export const selectCreatedSort = (state: { ui: UIState }) =>
  state.ui.createdSort;
export const selectIsDeleteDialogOpen = (state: { ui: UIState }) =>
  state.ui.isDeleteDialogOpen;
export const selectIsBorrowDialogOpen = (state: { ui: UIState }) =>
  state.ui.isBorrowDialogOpen;
export const selectIsEditDialogOpen = (state: { ui: UIState }) =>
  state.ui.isEditDialogOpen;
export const selectSelectedBookId = (state: { ui: UIState }) =>
  state.ui.selectedBookId;
export const selectSidebarOpen = (state: { ui: UIState }) =>
  state.ui.sidebarOpen;
export const selectScrolled = (state: { ui: UIState }) => state.ui.scrolled;
export const selectIsSubmitting = (state: { ui: UIState }) =>
  state.ui.isSubmitting;
export const selectFormErrors = (state: { ui: UIState }) => state.ui.formErrors;
