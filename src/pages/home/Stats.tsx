import { useGetStatsQuery } from "@/redux/api/stats.api";
import { Skeleton } from "@/components/ui/skeleton";
import { animate } from "framer-motion";
import { useEffect, useState } from "react";

function formatNumber(n: number) {
  return new Intl.NumberFormat(undefined, {
    notation: n >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(n);
}

function CountUp({
  value,
  duration = 1.2,
}: {
  value: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{formatNumber(Math.round(display))}</span>;
}

const Stats = () => {
  const { data, isLoading, isError } = useGetStatsQuery();

  const stats = (data?.data ?? {}) as {
    totalBooks?: number;
    totalBorrowedQuantity?: number;
    totalCopies?: number;
  };

  const totalBooks = stats.totalBooks ?? 0;
  const totalBorrowedQuantity = stats.totalBorrowedQuantity ?? 0;
  const totalCopies = stats.totalCopies ?? 0;

  return (
    <div>
      {/* Stats Section */}
      <div className="max-w-4xl mx-auto px-4 mt-8 bg-card pt-18 pb-8 md:pt-8 md:pb-8 rounded-md text-center grid grid-cols-3 shadow">
        <div>
          {isLoading ? (
            <Skeleton className="h-12 w-24 mx-auto mb-1" />
          ) : (
            <p className="text-4xl font-bold mb-1">
              <CountUp value={totalBooks} />
            </p>
          )}
          <p className="text-sm">Collections</p>
        </div>

        <div>
          {isLoading ? (
            <Skeleton className="h-12 w-24 mx-auto mb-1" />
          ) : (
            <p className="text-4xl font-bold mb-1">
              <CountUp value={totalCopies} />
            </p>
          )}
          <p className="text-sm">Books</p>
        </div>

        <div>
          {isLoading ? (
            <Skeleton className="h-12 w-24 mx-auto mb-1" />
          ) : (
            <p className="text-4xl font-bold mb-1">
              <CountUp value={totalBorrowedQuantity} />
            </p>
          )}
          <p className="text-sm">Borrows</p>
        </div>
      </div>

      {isError && (
        <p className="text-red-500 mt-4 text-center">Failed to load stats</p>
      )}
    </div>
  );
};

export default Stats;
