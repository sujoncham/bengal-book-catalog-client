import {
  addCart,
  removeFromCart,
  removeFromTotal,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const style = {
  button: `border-2 border-purple-400 py-1 px-3 ml-5 rounded-md hover:bg-purple-500`,
};

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="container mx-auto px-10 flex justify-center items-center py-16">
      <div className="w-[700px]">
        <div>
          <h1 className="text-3xl font-bold py-5">My Cart</h1>
          Total: {total.toFixed(2)}
        </div>
        <div className="grid grid-cols-1 gap-5">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex justify-start gap-5 border-2 border-purple-300 rounded-md"
            >
              <img src={product.image} className="w-[350px] h-[250px]" alt="" />
              <div className="w-[350px] relative">
                <h1 className="text-2xl font-bold py-3">{product.title}</h1>

                <div className="flex justify-start items-center gap-5">
                  <p>Pieces : {product.quantity}</p>
                  <div>
                    <button
                      onClick={() => dispatch(removeFromTotal(product))}
                      className={style.button}
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(addCart(product))}
                      className={style.button}
                    >
                      +
                    </button>
                  </div>
                </div>

                <p>Price : {(product.quantity! * product.price).toFixed(2)}</p>
                <button
                  onClick={() => dispatch(removeFromCart(product))}
                  className={`absolute bottom-5 right-5 ${style.button}`}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
