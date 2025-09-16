/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import { format } from "date-fns";
import { Edit, Trash2, BookOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const AllBooks = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const totalBooks: number = Array.isArray(books)
    ? books.length
    : (books as any)?.total ?? 0;

  const handleEdit = (book: any) => {
    console.log("Edit Book", book);
    // open form with pre-filled book data
  };

  const handleDelete = (book: any) => {
    console.log("Delete Book", book);
    // open confirmation dialog before deletion
  };

  const handleBorrow = (book: any) => {
    console.log("Borrow Book", book);
    // open borrow form
  };

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
          Showing {totalBooks === 0 ? 0 : 1}-{totalBooks} of {totalBooks} books
        </p>
      </div>

      {/* Table */}

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            // 🔹 One big skeleton instead of multiple rows
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
                  {Array.isArray(books) && books.length > 0 ? (
                    books.map((book: any) => (
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
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(book)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
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

      <Pagination />
    </div>
  );
};

export default AllBooks;
