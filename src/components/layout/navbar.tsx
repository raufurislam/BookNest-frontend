// import { NavLink, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "All Books", path: "/all-books" },
//     { name: "Add Books", path: "/add-books" },
//     { name: "Borrow Summary", path: "/borrow-summary" },
//   ];

//   return (
//     <nav
//       className={`max-w-7xl mx-auto px-5 h-16 flex items-center justify-between transition-colors duration-300
//         ${isHome ? "text-black" : "text-black/80"}`}
//     >
//       {/* Logo */}
//       <div>
//         <NavLink
//           to="/"
//           className={`font-bold text-lg ${
//             isHome ? "text-black" : "text-foreground"
//           }`}
//         >
//           <span className="mr-1">Book</span>Nest
//         </NavLink>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-6 text-sm font-medium">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) =>
//               `relative px-2 py-1 transition-colors duration-200 ${
//                 isHome
//                   ? isActive
//                     ? "text-black/95 border-b-2 border-black/95"
//                     : "text-black/70 hover:text-black/95"
//                   : isActive
//                   ? "text-foreground border-b-2 border-foreground"
//                   : "text-muted-foreground hover:text-foreground"
//               }`
//             }
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Mode Toggle */}
//       {/* <div>
//         <ModeToggle />
//       </div> */}
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink, useLocation } from "react-router-dom";
// import { ModeToggle } from "../mode-toggler";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 transition-colors duration-200 ${
                  isHome
                    ? isActive
                      ? "text-black/95 border-b-2 border-black/95"
                      : "text-black/70 hover:text-black/95"
                    : isActive
                    ? "text-black/95 border-b-2 border-black/95"
                    : "text-black/70 hover:text-black/95"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right: Theme Toggle */}
        {/* <div>
          <ModeToggle />
        </div> */}
      </div>
    </header>
  );
}
