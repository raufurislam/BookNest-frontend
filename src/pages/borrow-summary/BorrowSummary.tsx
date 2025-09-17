import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetBorrowSummaryQuery } from "@/redux/api/book.api";
import { useMemo, useState } from "react";
import CustomPagination from "@/components/modules/shared/CustomPagination";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;

  const { paginated, totalPages } = useMemo(() => {
    const list = Array.isArray(data) ? data : [];
    const total = Math.ceil(list.length / perPage) || 1;
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    return { paginated: list.slice(start, end), totalPages: total };
  }, [data, currentPage]);

  const totalRows = Array.isArray(data) ? data.length : 0;
  const startIndex = totalRows === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const endIndex = Math.min(currentPage * perPage, totalRows);

  return (
    <div className="my-16 container mx-auto px-5">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Borrow Summary</h1>
        <p className="text-muted-foreground">
          Total borrowed quantities grouped by book
        </p>
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between mt-6 mb-3">
        <p className="text-sm text-muted-foreground">
          Showing {totalRows === 0 ? 0 : `${startIndex}-${endIndex}`} of{" "}
          {totalRows} records
        </p>
      </div>

      <Card>
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
                  {paginated && paginated.length > 0 ? (
                    paginated.map((row, idx) => (
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

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BorrowSummary;
