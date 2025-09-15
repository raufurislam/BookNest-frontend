import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBookByIdQuery(id!);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load book.</p>;

  const book = data?.data;

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold">{book?.title}</h1>
      <p className="text-lg text-gray-700 italic">– {book?.author}</p>
      <p className="mt-5">{book?.description}</p>

      <div className="mt-5 flex justify-between">
        <p>
          Genre: <span className="font-medium">{book?.genre}</span>
        </p>
        <p>Copies: {book?.copies}</p>
        <p className={book?.available ? "text-green-600" : "text-red-500"}>
          {book?.available ? "Available" : "Unavailable"}
        </p>
      </div>

      <p className="mt-3">
        ISBN: <span className="font-medium">{book?.isbn}</span>
      </p>
    </div>
  );
}
