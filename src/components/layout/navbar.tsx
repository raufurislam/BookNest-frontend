import { NavLink, useLocation } from "react-router-dom";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/all-books" },
    { name: "Add Books", path: "/add-books" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  return (
    <nav
      className={`max-w-7xl mx-auto px-5 h-16 flex items-center justify-between transition-colors duration-300
        ${isHome ? "text-black" : "text-black/80"}`}
    >
      {/* Logo */}
      <div>
        <NavLink
          to="/"
          className={`font-bold text-lg ${
            isHome ? "text-black" : "text-foreground"
          }`}
        >
          <span className="mr-1">Book</span>Nest
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">
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
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mode Toggle */}
      {/* <div>
        <ModeToggle />
      </div> */}
    </nav>
  );
};

export default Navbar;
