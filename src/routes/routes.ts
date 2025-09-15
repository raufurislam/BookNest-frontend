import { createBrowserRouter } from "react-router";
import App from "./../App";
import AllBooks from "@/pages/all-books/AllBooks";
import AddBooks from "@/pages/add-books/AddBooks";
import BorrowSummary from "@/pages/borrow-summary/BorrowSummary";

import ErrorPage from "@/components/ErrorPage";
import Home from "@/pages/home/Home";
import BookDetails from "@/components/modules/books/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      },
      {
        path: "/add-books",
        Component: AddBooks,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
