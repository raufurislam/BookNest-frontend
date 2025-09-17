import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetBorrowSummaryQuery } from "@/redux/api/book.api";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();

  return (
    <div className="my-16 container mx-auto px-5">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Borrow Summary</h1>
        <p className="text-muted-foreground">
          Total borrowed quantities grouped by book
        </p>
      </div>

      <Card className="mt-6">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-4">
              <Skeleton className="h-60 w-full rounded-lg" />
            </div>
          ) : isError ? (
            <div className="p-6 text-center text-destructive">
              Failed to load borrow summary.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b bg-muted/40">
                  <tr>
                    <th className="px-4 py-3">Book Title</th>
                    <th className="px-4 py-3">ISBN</th>
                    <th className="px-4 py-3 text-right">Total Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data.map((row, idx) => (
                      <tr
                        key={`${row.book.isbn}-${idx}`}
                        className="border-b hover:bg-muted/40 transition-colors"
                      >
                        <td className="px-4 py-3">{row.book.title}</td>
                        <td className="px-4 py-3">{row.book.isbn}</td>
                        <td className="px-4 py-3 text-right font-medium">
                          {row.totalQuantity}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={3}
                        className="py-10 text-center text-muted-foreground"
                      >
                        No borrow records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BorrowSummary;
