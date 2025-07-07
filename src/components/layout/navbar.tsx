import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-3">
      <div>
        <Link to="/" className="flex items-center">
          <span className="font-bold text-lg">Book</span>Nest
        </Link>
      </div>
      <div className="flex gap-8 text-sm">
        <Link to="/">Home</Link>
        <Link to="/all-books">All Books</Link>
        <Link to="/add-books">Add Books</Link>
        <Link to="/borrow-summary">Borrow Summary</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
