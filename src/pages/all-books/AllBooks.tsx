/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/book.api";
import { format } from "date-fns";
import {
  Edit,
  BookOpen,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Eye,
} from "lucide-react";
import CustomPagination from "@/components/modules/shared/CustomPagination";
import DeleteConfirmDialog from "@/components/modules/shared/DeleteConfirmDialog";
import { useNavigate } from "react-router-dom";
import BorrowDialog from "@/components/modules/shared/BorrowDialog";
import EditBookDialog from "@/components/modules/shared/EditBookDialog";
import { useUI } from "@/redux/hooks/useUI";

const AllBooks = () => {
  const {
    currentPage,
    booksPerPage,
    createdSort,
    setCurrentPage,
    toggleCreatedSort,
  } = useUI();

  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({
    limit: 0,
    sortBy: "createdAt",
    sort: createdSort,
  });
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const totalBooks = Array.isArray(books) ? books.length : 0;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = Array.isArray(books)
    ? books.slice(startIndex, endIndex)
    : [];

  // const handleDelete = (book: any) => console.log("Delete Book", book);
  const handleView = (bookId: string) => navigate(`/books/${bookId}`);

  if (isError) {
    return (
      <div className="my-16 container mx-auto px-5 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Error</h1>
        <p className="text-muted-foreground">
          Failed to load books. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="my-16 container mx-auto px-5">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">All Books</h1>
        <p className="text-muted-foreground">
          View all books in the library and manage collection
        </p>
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between mt-6 mb-3">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          {totalBooks === 0
            ? 0
            : `${startIndex + 1}-${Math.min(endIndex, totalBooks)}`}{" "}
          of {totalBooks} books
        </p>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-4">
              <Skeleton className="h-60 w-full rounded-lg" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b bg-muted/40">
                  <tr>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Author</th>
                    <th className="px-4 py-3">Genre</th>
                    <th className="px-4 py-3">ISBN</th>
                    <th className="px-4 py-3">Copies</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 select-none"
                        onClick={toggleCreatedSort}
                        aria-label={`Sort by Created At (${
                          createdSort === "asc" ? "descending" : "ascending"
                        })`}
                        title={`Sort by Created At (${
                          createdSort === "asc" ? "descending" : "ascending"
                        })`}
                      >
                        Created At
                        {createdSort === "asc" ? (
                          <ArrowUp className="h-4 w-4" />
                        ) : createdSort === "desc" ? (
                          <ArrowDown className="h-4 w-4" />
                        ) : (
                          <ArrowUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBooks.length > 0 ? (
                    currentBooks.map((book: any) => (
                      <tr
                        key={book._id}
                        className="border-b hover:bg-muted/40 transition-colors"
                      >
                        <td className="px-4 py-3">{book.title}</td>
                        <td className="px-4 py-3">{book.author}</td>
                        <td className="px-4 py-3">{book.genre}</td>
                        <td className="px-4 py-3">{book.isbn}</td>
                        <td className="px-4 py-3">{book.copies}</td>
                        <td className="px-4 py-3">
                          <Badge
                            variant="outline"
                            className={
                              book.copies > 0
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {book.copies > 0 ? "Available" : "Unavailable"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {format(new Date(book.createdAt), "dd/MM/yyyy")}
                        </td>
                        <td className="px-4 py-3 text-right flex gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleView(book._id)}
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <EditBookDialog
                            book={book}
                            trigger={
                              <Button size="sm" variant="outline" title="Edit">
                                <Edit className="h-4 w-4" />
                              </Button>
                            }
                          />

                          <DeleteConfirmDialog
                            title="Delete Book?"
                            description={`This will permanently delete "${book.title}".`}
                            onConfirm={() => deleteBook(book._id)}
                          />

                          <BorrowDialog
                            bookId={book._id}
                            availableCopies={book.copies}
                            trigger={
                              <Button
                                size="sm"
                                variant="secondary"
                                title="Borrow"
                              >
                                <BookOpen className="h-4 w-4" />
                              </Button>
                            }
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={8}
                        className="py-10 text-center text-muted-foreground"
                      >
                        No books found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllBooks;
