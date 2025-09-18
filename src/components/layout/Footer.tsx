// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="/books"
              className="hover:underline hover:text-blue-600 transition-colors"
            >
              All Books
            </a>
            <a
              href="/create-book"
              className="hover:underline hover:text-blue-600 transition-colors"
            >
              Add Book
            </a>
            <a
              href="/borrow-summary"
              className="hover:underline hover:text-blue-600 transition-colors"
            >
              Borrow Summary
            </a>
          </div>
        </div>
        <div className="text-center text-xs mt-4 text-gray-500">
          Made with ❤️ by Raufur Islam | React + TypeScript + Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
