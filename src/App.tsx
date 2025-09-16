import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>

      {!isHomePage && <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
