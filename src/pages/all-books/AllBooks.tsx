// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Card, CardContent } from "@/components/ui/card";
// import { Pagination } from "@/components/ui/pagination";
// import { useGetBooksQuery } from "@/redux/api/bookApi";

// const AllBooks = () => {
//   const { data: books, isLoading, isError } = useGetBooksQuery();

//   console.log(books);
//   /**
//    Array(7)0: author: "Nulla sed consectetu"available: truecopies: 8createdAt: "2025-09-16T07:32:44.474Z"description: "Commodi voluptas lab"genre: "SCIENCE"isbn: "1234567890125"title: "Sunt sint eligendi"updatedAt: "2025-09-16T07:32:44.474Z"_id: "68c9129cafe448150f9de901"[[Prototype]]: Object1: {_id: '68c911c6afe448150f9de8fc', title: 'Pariatur Quisquam o', author: 'Ut iste rerum conseq', genre: 'HISTORY', isbn: '1234567890124', …}2: {_id: '68c9117aafe448150f9de8f8', title: 'Et et eius saepe inv', author: 'Dicta facere sit est', genre: 'FANTASY', isbn: '1234567890123', …}3: {_id: '68c91054afe448150f9de8f5', title: 'Title-1', author: 'Stephen Hawking', genre: 'SCIENCE', isbn: '97805533801633', …}4: {_id: '6859920f9e4687bbd4b44f53', title: 'The Theory of Everything', author: 'Stephen Hawking', genre: 'SCIENCE', isbn: '000000000002', …}5: {_id: '6859119f5ab740ac80ac6a22', title: 'The Theory of Everything 2', author: 'Stephen Hawking', genre: 'SCIENCE', isbn: '97805533801632', …}6: {_id: '6859004a9c2246ca74dcdc47', title: 'The Theory of Everything 2.1', author: 'Stephen Hawking', genre: 'NON_FICTION', isbn: '97805533801631', …}length: 7[[Prototype]]: Array(0)

//    */

//   // derive totalBooks safely from the returned data (supports an array or an object with a 'total' field)
//   const totalBooks: number = Array.isArray(books)
//     ? books.length
//     : (books as any)?.total ?? 0;

//   return (
//     <div className="my-16 container mx-auto px-5 h-16 ">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold tracking-tight">All Books</h1>
//         <p className="text-muted-foreground">
//           view all available books in the library and manage collection
//         </p>
//       </div>

//       {/* Summary */}
//       <div className="flex items-center justify-between mt-6 mb-3">
//         <p className="text-sm text-muted-foreground">
//           Showing {totalBooks === 0 ? 0 : 1}-{totalBooks} of {totalBooks} books
//         </p>
//         {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
//           Total books: {totalBooks}
//         </div> */}
//       </div>

//       {/* Table */}
//       <Card>
//         <CardContent className="p-0">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead className="border-b bg-muted/40">
//                 <tr>
//                   <th className="px-4 py-3">Ride Info</th>
//                   <th className="px-4 py-3">Locations</th>
//                   <th className="px-4 py-3">Fare & Distance</th>
//                   <th className="px-4 py-3">Status</th>
//                   <th className="px-4 py-3">Vehicle</th>
//                   <th
//                     className="px-4 py-3 cursor-pointer select-none"
//                     // onClick={() => handleSort("createdAt")}
//                   >
//                     <div className="inline-flex items-center gap-1.5">
//                       Date
//                       {/* {filters.sortBy === "createdAt" ? (
//                         <span className="text-xs">
//                           {filters.sortOrder === "asc" ? "↑" : "↓"}
//                         </span>
//                       ) : (
//                         <ArrowUpDown className="h-3.5 w-3.5" />
//                       )} */}
//                     </div>
//                   </th>
//                   <th className="px-4 py-3 text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {paginatedRides.length === 0 ? (
//                   <tr>
//                     <td colSpan={7} className="py-10 text-center">
//                       <div className="flex flex-col items-center gap-2 text-muted-foreground">
//                         <Search className="h-8 w-8" />
//                         <p>No rides found. Try adjusting filters.</p>
//                         <Button variant="outline" onClick={clearFilters}>
//                           Clear Filters
//                         </Button>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   paginatedRides.map((ride: IRide) => (
//                     <tr
//                       key={ride._id}
//                       className="border-b hover:bg-muted/40 transition-colors"
//                     >
//                       {/* Ride Info */}
//                       <td className="px-4 py-3">
//                         <div className="flex flex-col gap-1">
//                           {/* <div className="font-medium text-sm">
//                             #{ride._id.slice(-6)}
//                           </div>
//                           <div className="text-xs text-muted-foreground">
//                             Driver: {ride.driverId.slice(-6)}
//                           </div> */}

//                           <div className="font-medium text-sm">
//                             #{ride._id ? ride._id.slice(-6) : "N/A"}
//                           </div>
//                           <div className="text-xs text-muted-foreground">
//                             Driver:{" "}
//                             {ride.driverId ? ride.driverId.slice(-6) : "N/A"}
//                           </div>
//                         </div>
//                       </td>

//                       {/* Locations */}
//                       <td className="px-4 py-3">
//                         <div className="flex flex-col gap-2">
//                           <div className="flex items-start gap-2">
//                             <MapPin className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
//                             <div className="text-xs">
//                               <div className="font-medium">From</div>
//                               <div className="text-muted-foreground truncate max-w-[150px]">
//                                 {ride.pickupLocation.name}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-start gap-2">
//                             <MapPin className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
//                             <div className="text-xs">
//                               <div className="font-medium">To</div>
//                               <div className="text-muted-foreground truncate max-w-[150px]">
//                                 {ride.destinationLocation.name}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </td>

//                       {/* Fare & Distance */}
//                       <td className="px-4 py-3">
//                         <div className="flex flex-col gap-1">
//                           <div className="flex items-center gap-1">
//                             <FaBangladeshiTakaSign className="h-3 w-3 text-green-600" />
//                             <span className="font-medium">
//                               {ride.fare.toFixed(2)}
//                             </span>
//                           </div>
//                           <div className="text-xs text-muted-foreground">
//                             {ride.distance.toFixed(1)} km
//                           </div>
//                         </div>
//                       </td>

//                       {/* Status */}
//                       <td className="px-4 py-3">
//                         <Badge
//                           variant="outline"
//                           className={
//                             statusConfig[
//                               ride.status as keyof typeof statusConfig
//                             ]?.color
//                           }
//                         >
//                           {
//                             statusConfig[
//                               ride.status as keyof typeof statusConfig
//                             ]?.label
//                           }
//                         </Badge>
//                       </td>

//                       {/* Vehicle */}
//                       <td className="px-4 py-3">
//                         <Badge
//                           variant="outline"
//                           className={
//                             vehicleTypeConfig[
//                               ride.vehicleType as keyof typeof vehicleTypeConfig
//                             ]?.color
//                           }
//                         >
//                           {ride.vehicleType === "CAR" ? (
//                             <Car className="h-3 w-3 mr-1" />
//                           ) : (
//                             <Bike className="h-3 w-3 mr-1" />
//                           )}
//                           {
//                             vehicleTypeConfig[
//                               ride.vehicleType as keyof typeof vehicleTypeConfig
//                             ]?.label
//                           }
//                         </Badge>
//                       </td>

//                       {/* Date */}
//                       <td className="px-4 py-3 text-sm text-muted-foreground">
//                         {formatDate(ride.createdAt)}
//                       </td>

//                       {/* Actions */}
//                       <td className="px-4 py-3 text-right">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => handleViewDetails(ride)}
//                           className="flex items-center gap-2"
//                         >
//                           <Eye className="h-4 w-4" />
//                           Details
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//       <Pagination />
//     </div>
//   );
// };

// export default AllBooks;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import { format } from "date-fns";
import { Edit, Trash2, BookOpen } from "lucide-react";

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
        </CardContent>
      </Card>
      <Pagination />
    </div>
  );
};

export default AllBooks;
