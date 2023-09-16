import { useNavigate } from "react-router-dom";
import {
  removeFromWishlist,
  removeWishlist,
} from "../redux/features/wishlist/wishSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const style = {
  button: `border-2 border-purple-400 py-1 px-3 ml-5 rounded-md hover:bg-purple-500`,
};

const WishList = () => {
  const navigate = useNavigate();
  const { books } = useAppSelector((state) => state.wishlist);
  console.log(books);
  const dispatch = useAppDispatch();
  const handleContent = () => {
    navigate("/fullContent");
  };

  return (
    <div className="container mx-auto px-10 flex justify-center items-center py-16">
      <div className="w-[700px]">
        <div>
          <h1 className="text-3xl font-bold py-5">My Wishlist</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {books.map((product) => (
            <div
              key={product._id}
              className="flex justify-start gap-5 border-2 border-purple-300 rounded-md"
            >
              <img src={product.image} className="w-[350px] h-[250px]" alt="" />
              <div className="w-[350px] relative">
                <h1 className="text-2xl font-bold py-3">{product.title}</h1>

                <div className="flex justify-start items-center gap-5">
                  <p>Description : {product.description}</p>
                </div>

                <div className="absolute flex justify-start items-center bottom-5 right-5 ">
                  <button onClick={handleContent} className={`${style.button}`}>
                    read
                  </button>
                  <button
                    onClick={() => dispatch(removeWishlist(product))}
                    className={`${style.button}`}
                  >
                    UnWishlisst
                  </button>
                  <button
                    onClick={() => dispatch(removeFromWishlist(product))}
                    className={` ${style.button}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
