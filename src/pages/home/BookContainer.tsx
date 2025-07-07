const BookContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="relative inline-block text-5xl font-semibold">
          <span className="absolute inset-x-0 inset-y-5 bottom-1 h-8 bg-[#F9C265]/50 -z-10"></span>
          Collections
        </h1>

        <p className="text-gray-600 mt-2">
          Explore the latest additions to our collection
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((book, index) => (
          <div
            key={index}
            className="bg-[#f0f0f0] p-5 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.2)] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">Title</h2>
              <p className="text-sm text-gray-600">author</p>
              <p className="text-sm font-semibold text-right mt-1">24</p>
              <p className="text-sm mt-3">
                ISBN: <span className="font-medium">1254155521544</span>
              </p>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                A calm, simple way to explore and manage books. Enjoy a
                clutter-free. A calm, simple way to explore and manage books.
                Enjoy a clutter-free experience.
              </p>
            </div>
            <div className="flex">
              <button className="mt-5 border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition">
                View Book
              </button>
              <button className="mt-5 border bg-yellow-500/50 border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition">
                View Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookContainer;
