# Redux State Management Guide

This guide explains how to use Redux state management for both API calls and local UI state in the BookNest frontend application.

## Overview

The project uses Redux Toolkit with RTK Query for:

- **API State Management**: All server-side data (books, borrows, stats)
- **UI State Management**: Local component state that needs to be shared across components

## Architecture

```
src/redux/
├── api/                    # RTK Query API endpoints
│   ├── book.api.ts        # Book-related API calls
│   ├── borrow.api.ts      # Borrow-related API calls
│   └── stats.api.ts       # Statistics API calls
├── features/              # Redux slices
│   └── uiSlice.ts         # UI state management
├── hooks/                 # Custom hooks
│   └── useUI.ts          # UI state hook
├── store.ts              # Redux store configuration
└── hook.ts               # Typed Redux hooks
```

## API State Management (RTK Query)

### Usage Example

```typescript
import { useGetBooksQuery, useAddBookMutation } from "@/redux/api/book.api";

function BooksList() {
  const {
    data: books,
    isLoading,
    error,
  } = useGetBooksQuery({
    limit: 10,
    sortBy: "createdAt",
    sort: "desc",
  });

  const [addBook, { isLoading: isAdding }] = useAddBookMutation();

  const handleAddBook = async (bookData) => {
    try {
      await addBook(bookData).unwrap();
      // Success - RTK Query automatically updates cache
    } catch (error) {
      // Handle error
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading books</div>;

  return (
    <div>
      {books?.map((book) => (
        <div key={book._id}>{book.title}</div>
      ))}
    </div>
  );
}
```

## UI State Management (Redux Slices)

### Available UI State

The `uiSlice` manages the following UI states:

- **Pagination**: `currentPage`, `booksPerPage`
- **Sorting**: `createdSort` ('asc' | 'desc')
- **Modals**: `isDeleteDialogOpen`, `isBorrowDialogOpen`, `isEditDialogOpen`
- **Navigation**: `sidebarOpen`, `scrolled`
- **Loading**: `isSubmitting`
- **Form Errors**: `formErrors` (key-value pairs)

### Using the useUI Hook

```typescript
import { useUI } from "@/redux/hooks/useUI";

function MyComponent() {
  const {
    // State values
    currentPage,
    booksPerPage,
    createdSort,
    isSubmitting,
    formErrors,
    sidebarOpen,

    // Action functions
    setCurrentPage,
    setBooksPerPage,
    toggleCreatedSort,
    setSubmitting,
    setFormError,
    clearFormError,
    toggleSidebar,
    resetUIState,
  } = useUI();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortToggle = () => {
    toggleCreatedSort();
  };

  const handleFormSubmit = async () => {
    setSubmitting(true);
    try {
      // Your form submission logic
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <button onClick={handleSortToggle}>Sort: {createdSort}</button>
      <button onClick={() => setCurrentPage(1)}>Go to Page 1</button>
    </div>
  );
}
```

### Direct Redux Usage (Alternative)

If you prefer to use Redux directly without the custom hook:

```typescript
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  selectCurrentPage,
  setCurrentPage,
  toggleCreatedSort,
} from "@/redux/features/uiSlice";

function MyComponent() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const createdSort = useAppSelector(selectCreatedSort);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleSortToggle = () => {
    dispatch(toggleCreatedSort());
  };

  return (
    <div>
      <button onClick={handleSortToggle}>Sort: {createdSort}</button>
      <button onClick={() => handlePageChange(1)}>Go to Page 1</button>
    </div>
  );
}
```

## State Management Patterns

### 1. API State (Server State)

- Use RTK Query hooks for all API calls
- Automatic caching, loading states, and error handling
- Data is automatically synchronized across components

### 2. UI State (Client State)

- Use `useUI` hook for shared UI state
- Use local `useState` for component-specific state that doesn't need to be shared
- Use Redux slices only when state needs to be shared across multiple components

### 3. Form State

- Use `react-hook-form` for complex forms
- Use Redux UI state for form-level loading and error states
- Use Redux for form errors that need to be shared across components

## Best Practices

### ✅ Do

- Use RTK Query for all API calls
- Use `useUI` hook for shared UI state
- Use local `useState` for component-specific state
- Keep Redux state minimal and focused
- Use TypeScript for all state management

### ❌ Don't

- Don't put component-specific state in Redux
- Don't duplicate API data in Redux state
- Don't use Redux for simple local state that doesn't need sharing
- Don't mutate state directly (use Redux actions)

## Examples

### Pagination Component

```typescript
import { useUI } from "@/redux/hooks/useUI";

function Pagination() {
  const { currentPage, setCurrentPage } = useUI();

  return (
    <div>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}
```

### Modal Component

```typescript
import { useUI } from "@/redux/hooks/useUI";

function DeleteDialog() {
  const { isDeleteDialogOpen, selectedBookId, closeDeleteDialog } = useUI();

  if (!isDeleteDialogOpen) return null;

  return (
    <div className="modal">
      <h2>Delete Book {selectedBookId}?</h2>
      <button onClick={closeDeleteDialog}>Cancel</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
```

### Form with Loading State

```typescript
import { useUI } from "@/redux/hooks/useUI";

function BookForm() {
  const { isSubmitting, setSubmitting, setFormError } = useUI();

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      await submitBook(data);
    } catch (error) {
      setFormError("general", "Failed to submit book");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
```

## Migration from Local State

To migrate from local state to Redux state:

1. **Identify shared state**: Look for state that's used in multiple components
2. **Add to uiSlice**: Add the state and actions to `uiSlice.ts`
3. **Update components**: Replace `useState` with `useUI` hook
4. **Test thoroughly**: Ensure state updates work correctly across components

## Troubleshooting

### Common Issues

1. **State not updating**: Check if you're using the correct action creator
2. **TypeScript errors**: Ensure all types are properly defined in the slice
3. **Performance issues**: Avoid putting too much state in Redux; use local state when possible

### Debug Tools

- Use Redux DevTools browser extension
- Check Redux state in the browser console
- Use `console.log` to debug state changes

## Conclusion

This Redux setup provides a clean separation between API state (RTK Query) and UI state (Redux slices), following React and Redux best practices. Use the `useUI` hook for convenient access to UI state, and RTK Query hooks for API operations.
