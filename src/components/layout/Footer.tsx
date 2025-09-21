import { Link } from "react-router-dom";
import {
  BookOpen,
  Github,
  Linkedin,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                BookNest
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              A modern library management system that makes organizing and
              tracking books simple and efficient.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/raufurislam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
              <a
                href="https://linkedin.com/in/raufurislam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
              <a
                href="mailto:raufurislam@example.com"
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-books"
                  className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  to="/add-books"
                  className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Add Book
                </Link>
              </li>
              <li>
                <Link
                  to="/borrow-summary"
                  className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Borrow Summary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Demo */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Connect
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 mr-3 text-yellow-500" />
                <span className="text-sm">raufurislam@gmail.com</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://booknest-peach.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span>&copy; {currentYear} BookNest. All rights reserved.</span>
            </div>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by{" "}
                <a
                  href="https://github.com/raufurislam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium"
                >
                  Raufur Islam
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
