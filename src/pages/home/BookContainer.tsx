import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import type { IBook } from "@/types";

const BookContainer = () => {
  const { data: books, isLoading, error } = useGetBooksQuery();
  console.log(books);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="relative inline-block text-4xl font-semibold">
          <span className="absolute inset-x-0 inset-y-3 bottom-1 h-8 bg-[#F9C265]/50 -z-10"></span>
          Recent Published
        </h1>

        <p className="text-gray-600 mt-2">
          Explore the latest additions to our collection
        </p>
      </div>

      {/* Book Cards */}
      {isLoading ? (
        <p className="text-center text-gray-500 col-span-full">
          Loading books...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 col-span-full">
          Failed to load books.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {books?.data?.map((book: IBook) => (
            <div
              key={book._id}
              className="bg-[#f0f0f0] p-5 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.2)] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-bold">{book.title}</h2>
                <p className="text-sm text-gray-600 italic">– {book.author}</p>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                  {book.description?.slice(0, 100)}...
                </p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm font-semibold mt-1">
                    <span className="text-sm text-gray-600">copies:</span>{" "}
                    {book.copies}
                  </p>
                  <p
                    className={`text-sm font-semibold mt-1 ${
                      book.available ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {book.available ? "Available" : "Unavailable"}
                  </p>
                </div>
                <p className="text-sm mt-3">
                  ISBN: <span className="font-medium">{book.isbn}</span>
                </p>
              </div>
              <div className="flex gap-3">
                <button className="mt-5 border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition">
                  View Book
                </button>
                <Button className="mt-5 border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition">
                  Borrow Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookContainer;
