import { useParams } from "react-router-dom";
import { useSingleProductsQuery } from "../redux/api/apiSlice";
import { addCart } from "../redux/features/cart/cartSlice";
import { addWishlist } from "../redux/features/wishlist/wishSlice";
import { useAppDispatch } from "../redux/hooks";
import { IProduct } from "../types/globalTypes";
import BookReview from "./BookReview";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data: product, isLoading, error } = useSingleProductsQuery(id);
  console.log(product);
  console.log(error);
  let loading;
  if (isLoading) {
    loading = "Hello, first loading";
  }

  const handleAddProduct = (product: IProduct) => {
    dispatch(addCart(product));
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-10">
        {loading}
        <div className="grid lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="h-full w-full"
          />

          <div className="px-10 py-2">
            <h2 className="text-2xl font-bold tracking-tight uppercase">
              {product?.data?.title}
            </h2>
            <p>{product?.data?.author}</p>
            <p className="mt-6 text-lg leading-8">
              {product?.data?.decription}
            </p>

            <p>Genre: {product?.data?.genre}</p>
            <p>Rating : 4</p>
            <p>Price ${product?.data?.price.toFixed(2)}</p>
            <p>Published : {product?.data?.published}</p>
            <div className="mt-5">
              <button
                onClick={() => handleAddProduct(product)}
                className="border-2 border-green-800 px-2 py-1 mt-5 mr-5 rounded-md bg-green-800"
              >
                add to cart
              </button>

              <button
                onClick={() => dispatch(addWishlist(product))}
                className="border-2 border-green-800 mr-2 px-2 py-1 rounded-md bg-green-800 text-white"
              >
                add to wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <BookReview id={id!} />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
