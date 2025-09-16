import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type CustomPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate page numbers with ellipsis
  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages.map((page, idx) =>
      typeof page === "number" ? (
        <PaginationItem key={idx}>
          <PaginationLink
            href="#"
            isActive={page === currentPage}
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(page);
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ) : (
        <PaginationItem key={idx}>
          <PaginationEllipsis />
        </PaginationItem>
      )
    );
  };

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(currentPage - 1);
            }}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
