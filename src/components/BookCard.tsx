import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IProduct } from "../types/globalTypes";

interface IProps {
  product: IProduct;
}

const BookCard = ({ product }: IProps) => {
  const clickedHeart = true;
  return (
    <div className="group border-2 border-green-800 px-3 py-3 rounded-md">
      <div className="bg-gray-200 relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-[300px] w-full rounded-md group-hover:opacity-75"
        />

        <button className="absolute top-0 z-30 right-0">
          {clickedHeart ? <FaRegHeart size={30} /> : <FaHeart size={30} />}
        </button>
      </div>
      <h3 className="mt-4 text-xl font-bold text-green-800">
        {product.title} -{" "}
        <span className="text-orange-500">{product.author}</span>
      </h3>

      <h3 className="mt-4 text-sm text-gray-700">Genre: {product.genre}</h3>
      <h3 className="text-sm text-gray-700">Published: {product.dated}</h3>
      <p className="text-lg font-medium text-gray-900">${product.price}</p>
      <div className="mt-5">
        <button className="border-2 border-green-800 mr-2 px-2 py-1 rounded-md bg-green-800 text-white hover:bg-orange-500">
          add to card
        </button>
        <Link
          to={"/bookDetail"}
          className="border-2 border-green-800 px-2 py-1 rounded-md bg-green-800 text-white hover:bg-orange-500"
        >
          see detail
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
