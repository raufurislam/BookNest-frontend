const Stats = () => {
  return (
    <div>
      {/* Stats Section */}
      <div className="mt-8 bg-card py-8 rounded-md text-center grid grid-cols-3 max-w-6xl mx-auto shadow">
        <div>
          <p className="text-4xl font-bold mb-1">100+</p>
          <p className="text-sm">Books</p>
        </div>
        <div>
          <p className="text-4xl font-bold mb-1">200+</p>
          <p className="text-sm">Borrows</p>
        </div>
        <div>
          <p className="text-4xl font-bold mb-1">50</p>
          <p className="text-sm">Collections</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
