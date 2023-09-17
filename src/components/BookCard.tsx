import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addCart } from "../redux/features/cart/cartSlice";
import { addWishlist } from "../redux/features/wishlist/wishSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IProduct } from "../types/globalTypes";

interface IProps {
  product: IProduct;
}

const BookCard = ({ product }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const url = `http://localhost:5000/`;
  const { user } = useAppSelector((state) => state.user);

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const isProductInWishlist = useAppSelector((state) => {
    const productToCheck = state.wishlist.books.find(
      (product) => product._id === product._id
    );
    return !!productToCheck;
  });

  const handleAddProduct = (product: IProduct) => {
    if (isAddedToCart) {
      // Show alert or message here
      alert("You have already added this product to the cart.");
    } else {
      dispatch(addCart(product));
      setIsAddedToCart(true);
      console.log("added", product);
    }
  };

  const handleAddWishlist = (product: IProduct) => {
    dispatch(addWishlist(product));
  };

  const handleSingleProduct = (id: number) => {
    navigate(`/bookDetail/${id}`);
  };

  return (
    <div className="group border-2 border-green-800 px-3 py-3 rounded-md">
      <div className="bg-gray-200 relative">
        <img
          src={product.image ? product.image : url + product.image}
          alt={product.title}
          className="h-[300px] w-full rounded-md group-hover:opacity-75"
        />

        <button
          onClick={() => handleAddWishlist(product)}
          className="absolute top-0 z-30 right-0"
        >
          {isProductInWishlist ? (
            <FaHeart size={30} />
          ) : (
            <FaRegHeart size={30} />
          )}
        </button>
      </div>
      <h3 className="mt-4 text-xl font-bold text-green-800">
        {product.title} -{" "}
        <span className="text-orange-500">{product.author}</span>
      </h3>

      <h3 className="mt-4 text-sm text-gray-700">Genre: {product.genre}</h3>
      <h3 className="text-sm text-gray-700">Published: {product.published}</h3>
      <p className="text-lg font-medium text-gray-900">${product.price}</p>
      <div className="mt-5">
        {user.email && (
          <button
            onClick={() => handleAddProduct(product)}
            className={`border-2 border-purple-400 px-2 py-3 mt-5 rounded-md bg-blue-600 ${
              isAddedToCart ? "cursor-not-allowed bg-blue-800" : ""
            }`}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Already Added" : "Add to Cart"}
          </button>
        )}
        <button
          onClick={() => handleSingleProduct(product._id)}
          className="border-2 border-purple-400 px-2 py-3 mt-5 rounded-md bg-blue-600"
        >
          detail product
        </button>
      </div>
    </div>
  );
};

export default BookCard;
