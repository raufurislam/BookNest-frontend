import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import type { IBook } from "@/types";
import { Link } from "react-router-dom";
import BorrowDialog from "@/components/modules/shared/BorrowDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const BookContainer = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({ limit: 12, sortBy: "createdAt", sort: "desc" });

  const previewBooks = Array.isArray(books) ? books : [];
  const availableBooks = previewBooks.filter((b) => (b.copies ?? 0) > 0);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="relative inline-block text-4xl font-semibold tracking-tight">
          <span className="absolute inset-x-0 inset-y-3 bottom-1 h-8 bg-[#F9C265]/50 -z-10"></span>
          Recent Published
        </h1>
        <p className="text-muted-foreground mt-2">
          Explore the latest additions to our collection
        </p>
      </div>

      {/* Book Cards */}
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Card key={idx}>
              <CardContent className="p-4 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-3 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : isError ? (
        <p className="text-center text-destructive">Failed to load books.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {availableBooks.length === 0 && (
              <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center text-xs md:text-sm text-muted-foreground py-8">
                No available books right now.
              </div>
            )}
            {availableBooks.map((book: IBook) => {
              const available = (book.copies ?? 0) > 0;
              const full = book.description || "";
              const shortDesc =
                full.length > 30 ? `${full.slice(0, 30)}...` : full;
              return (
                <Card
                  key={book._id}
                  className="group hover:shadow-md transition-shadow duration-200"
                >
                  <CardContent className="p-3 md:p-4 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-1.5 md:gap-2">
                      <div>
                        <h2 className="text-[13px] md:text-base font-semibold leading-snug line-clamp-2">
                          {book.title}
                        </h2>
                        <p className="text-[10px] md:text-xs text-muted-foreground italic mt-0.5">
                          – {book.author}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          (available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800") +
                          " text-[10px] md:text-xs"
                        }
                      >
                        {available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>

                    <p className="text-[11px] md:text-xs text-foreground/80 mt-1.5 md:mt-2 min-h-4">
                      {shortDesc || "No description available."}
                    </p>

                    <div className="mt-2.5 md:mt-3 grid grid-cols-2 gap-2 text-[11px] md:text-xs">
                      <div className="rounded-md border p-1.5 md:p-2">
                        <p className="text-muted-foreground">Copies</p>
                        <p className="font-medium">{book.copies}</p>
                      </div>
                      <div className="rounded-md border p-1.5 md:p-2">
                        <p className="text-muted-foreground">ISBN</p>
                        <p className="font-medium truncate" title={book.isbn}>
                          {book.isbn}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2.5 md:mt-3 flex gap-2">
                      <Link to={`/books/${book._id}`} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full text-xs md:text-sm"
                          variant="secondary"
                        >
                          View
                        </Button>
                      </Link>
                      <BorrowDialog
                        bookId={book._id}
                        trigger={
                          <Button
                            size="sm"
                            className="whitespace-nowrap text-xs md:text-sm"
                          >
                            Borrow
                          </Button>
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 flex justify-end">
            <Link to="/all-books">
              <Button size="sm" className="px-6">
                View more
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BookContainer;
