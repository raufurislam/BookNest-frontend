// import { NavLink, useLocation } from "react-router-dom";
// // import { ModeToggle } from "../mode-toggler";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "All Books", path: "/all-books" },
//   { name: "Add Books", path: "/add-books" },
//   { name: "Borrow Summary", path: "/borrow-summary" },
// ];

// export default function Navbar() {
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isHome = currentPath === "/";

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-black/5 backdrop-blur-md shadow-md" // subtle background on scroll
//           : "bg-transparent backdrop-blur-0"
//       }`}
//     >
//       <div className="container mx-auto px-5 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <NavLink
//           to="/"
//           className={`font-bold text-lg transition-colors duration-200 ${
//             isHome ? "text-black" : "text-black"
//           }`}
//         >
//           <span className="mr-1">Book</span>Nest
//         </NavLink>

//         {/* Navigation Links */}
//         <div className="hidden md:flex gap-6 text-sm font-medium">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `relative px-2 py-1 transition-colors duration-200 ${
//                   isHome
//                     ? isActive
//                       ? "text-black/95 border-b-2 border-black/95"
//                       : "text-black/70 hover:text-black/95"
//                     : isActive
//                     ? "text-black/95 border-b-2 border-black/95"
//                     : "text-black/70 hover:text-black/95"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* Right: Theme Toggle */}
//         {/* <div>
//           <ModeToggle />
//         </div> */}
//       </div>
//     </header>
//   );
// }

import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navItems = [
  { name: "Home", path: "/" },
  { name: "All Books", path: "/all-books" },
  { name: "Add Books", path: "/add-books" },
  { name: "Borrow Summary", path: "/borrow-summary" },
];

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // control popover

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = currentPath === "/";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/5 backdrop-blur-md shadow-md" // subtle background on scroll
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className={`font-bold text-lg transition-colors duration-200 ${
            isHome ? "text-black" : "text-black"
          }`}
        >
          <span className="mr-1">Book</span>Nest
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-black/95 border-b-2 border-black/95"
                    : "text-black/70 hover:text-black/95"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Popover Menu */}
        <div className="md:hidden">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                className="p-2 rounded-full hover:bg-black/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20"
                aria-label="Toggle menu"
              >
                {open ? (
                  <X className="h-6 w-6 text-black transition-transform duration-200" />
                ) : (
                  <Menu className="h-6 w-6 text-black transition-transform duration-200" />
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              sideOffset={8}
              className="w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4"
            >
              <nav className="flex flex-col gap-3 text-base font-medium">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md transition-colors duration-200 ${
                        isActive
                          ? "bg-black/10 text-black font-semibold"
                          : "text-black/70 hover:text-black hover:bg-black/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
