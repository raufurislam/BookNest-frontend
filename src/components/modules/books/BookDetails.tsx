// import { useGetBookByIdQuery } from "@/redux/api/bookApi";
// import { useParams } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import BorrowDialog from "@/components/modules/shared/BorrowDialog";
// import EditBookDialog from "@/components/modules/shared/EditBookDialog";
// import { BookOpen, Edit } from "lucide-react";

// export default function BookDetails() {
//   const { id } = useParams();
//   const { data, isLoading, error } = useGetBookByIdQuery(id!);

//   if (isLoading) return <p className="text-center">Loading...</p>;
//   if (error)
//     return <p className="text-center text-red-500">Failed to load book.</p>;

//   const book = data?.data;

//   return (
//     <div className="max-w-5xl mx-auto px-5 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2">
//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h1 className="text-3xl font-bold tracking-tight">
//                     {book?.title}
//                   </h1>
//                   <p className="text-muted-foreground mt-1">– {book?.author}</p>
//                 </div>
//                 <Badge
//                   className={
//                     (book?.copies ?? 0) > 0
//                       ? "bg-green-100 text-green-800"
//                       : "bg-red-100 text-red-800"
//                   }
//                   variant="outline"
//                 >
//                   {(book?.copies ?? 0) > 0 ? "Available" : "Unavailable"}
//                 </Badge>
//               </div>

//               <p className="mt-6 leading-7 text-foreground/90">
//                 {book?.description}
//               </p>

//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <Card>
//                   <CardContent className="p-4">
//                     <p className="text-sm text-muted-foreground">Genre</p>
//                     <p className="font-medium">{book?.genre}</p>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <p className="text-sm text-muted-foreground">Copies</p>
//                     <p className="font-medium">{book?.copies}</p>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <p className="text-sm text-muted-foreground">ISBN</p>
//                     <p className="font-medium">{book?.isbn}</p>
//                   </CardContent>
//                 </Card>
//               </div>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <BorrowDialog
//                   bookId={book?._id as string}
//                   trigger={
//                     <Button
//                       size="sm"
//                       className="inline-flex items-center gap-2"
//                     >
//                       <BookOpen className="h-4 w-4" /> Borrow
//                     </Button>
//                   }
//                 />
//                 <EditBookDialog
//                   book={book!}
//                   trigger={
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="inline-flex items-center gap-2"
//                     >
//                       <Edit className="h-4 w-4" /> Edit
//                     </Button>
//                   }
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="lg:col-span-1">
//           <Card>
//             <CardContent className="p-6">
//               <h3 className="text-lg font-semibold">About this book</h3>
//               <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
//                 <li>
//                   Created:{" "}
//                   {book?.createdAt
//                     ? new Date(book.createdAt).toLocaleDateString()
//                     : "—"}
//                 </li>
//                 <li>
//                   Updated:{" "}
//                   {book?.updatedAt
//                     ? new Date(book.updatedAt).toLocaleDateString()
//                     : "—"}
//                 </li>
//                 <li>
//                   Status:{" "}
//                   {(book?.copies ?? 0) > 0 ? "Available" : "Unavailable"}
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useGetBookByIdQuery } from "@/redux/api/book.api";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import BorrowDialog from "@/components/modules/shared/BorrowDialog";
import EditBookDialog from "@/components/modules/shared/EditBookDialog";
import { BookOpen, Edit } from "lucide-react";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBookByIdQuery(id!);
  const book = data?.data;

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      {error && (
        <p className="text-center text-red-500 mb-4">Failed to load book.</p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {isLoading ? (
                    <>
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </>
                  ) : (
                    <>
                      <h1 className="text-3xl font-bold tracking-tight">
                        {book?.title}
                      </h1>
                      <p className="text-muted-foreground mt-1">
                        – {book?.author}
                      </p>
                    </>
                  )}
                </div>
                {isLoading ? (
                  <Skeleton className="h-6 w-24 rounded-full" />
                ) : (
                  <Badge
                    className={
                      (book?.copies ?? 0) > 0
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }
                    variant="outline"
                  >
                    {(book?.copies ?? 0) > 0 ? "Available" : "Unavailable"}
                  </Badge>
                )}
              </div>

              <div className="mt-6">
                {isLoading ? (
                  <>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </>
                ) : (
                  <p className="leading-7 text-foreground/90">
                    {book?.description}
                  </p>
                )}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      {isLoading ? (
                        <>
                          <Skeleton className="h-4 w-1/3 mb-2" />
                          <Skeleton className="h-4 w-2/3" />
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-muted-foreground">
                            {i === 0 ? "Genre" : i === 1 ? "Copies" : "ISBN"}
                          </p>
                          <p className="font-medium">
                            {i === 0
                              ? book?.genre
                              : i === 1
                              ? book?.copies
                              : book?.isbn}
                          </p>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {isLoading ? (
                  <>
                    <Skeleton className="h-8 w-28 rounded-md" />
                    <Skeleton className="h-8 w-28 rounded-md" />
                  </>
                ) : (
                  <>
                    <BorrowDialog
                      bookId={book!._id}
                      availableCopies={book!.copies}
                      trigger={
                        <Button
                          size="sm"
                          className="inline-flex items-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" /> Borrow
                        </Button>
                      }
                    />
                    {book && (
                      <EditBookDialog
                        book={book}
                        trigger={
                          <Button
                            size="sm"
                            variant="outline"
                            className="inline-flex items-center gap-2"
                          >
                            <Edit className="h-4 w-4" /> Edit
                          </Button>
                        }
                      />
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">
                {isLoading ? (
                  <Skeleton className="h-6 w-1/2" />
                ) : (
                  "About this book"
                )}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {isLoading ? (
                  [...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))
                ) : (
                  <>
                    <li>
                      Created:{" "}
                      {book?.createdAt
                        ? new Date(book.createdAt).toLocaleDateString()
                        : "—"}
                    </li>
                    <li>
                      Updated:{" "}
                      {book?.updatedAt
                        ? new Date(book.updatedAt).toLocaleDateString()
                        : "—"}
                    </li>
                    <li>
                      Status:{" "}
                      {(book?.copies ?? 0) > 0 ? "Available" : "Unavailable"}
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
