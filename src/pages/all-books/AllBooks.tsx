/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/bookApi";
import { format } from "date-fns";
import { Edit, BookOpen } from "lucide-react";
import CustomPagination from "@/components/modules/shared/CustomPagination";
import DeleteConfirmDialog from "@/components/modules/shared/DeleteConfirmDialog";

const AllBooks = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const totalBooks = Array.isArray(books) ? books.length : 0;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = Array.isArray(books)
    ? books.slice(startIndex, endIndex)
    : [];

  const handleEdit = (book: any) => console.log("Edit Book", book);
  // const handleDelete = (book: any) => console.log("Delete Book", book);
  const handleBorrow = (book: any) => console.log("Borrow Book", book);

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
                    <th className="px-4 py-3">Created At</th>
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
                              book.available
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {book.available ? "Available" : "Unavailable"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {format(new Date(book.createdAt), "dd/MM/yyyy")}
                        </td>
                        <td className="px-4 py-3 text-right flex gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(book)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          {/* <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(book)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button> */}

                          <DeleteConfirmDialog
                            title="Delete Book?"
                            description={`This will permanently delete "${book.title}".`}
                            onConfirm={() => deleteBook(book._id)}
                          />

                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleBorrow(book)}
                          >
                            <BookOpen className="h-4 w-4" />
                          </Button>
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

      {/* ✅ Reusable Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllBooks;
