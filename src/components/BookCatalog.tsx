import { useGetProductsQuery } from "../redux/api/apiSlice";
import { IProduct } from "../types/globalTypes";
import BookCard from "./BookCard";

const BookCatalog = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  // console.log(data);
  let loading;
  if (isLoading) {
    loading = "Hello, first loading";
  }
  let err;
  if (error) {
    err = "Hello, first loading";
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {loading}
          {err}
          {data?.data?.map((product: IProduct) => (
            <BookCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;
