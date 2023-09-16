import { useAppSelector } from "../redux/hooks";

const Checkout = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  return (
    <div className="container mx-auto px-5 py-5 h-auto">
      <div className="border-2 border-green-800 h-28 flex justify-center items-center">
        <h1 className="text-3xl font-bold py-5 text-center text-green-800">
          Checkout Information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 text-primary">
        <div className="max-w-3xl w-full">
          <h1 className="mb-2">Delivery Information</h1>
          <div className="h-[80vh] border border-gray-300 rounded-md p-10 overflow-y-auto">
            <div className="flex gap-5">
              <div className="w-full space-y-5">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                  />
                </div>
                <div>
                  <label htmlFor="name">Email</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                  />
                </div>
              </div>
              <div className="w-full space-y-5">
                <div>
                  <label htmlFor="name">Phone</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 border-2 w-full border-purple-300 rounded-md px-3 py-1"
                  />
                </div>
                <div>
                  <label htmlFor="name">City</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="name">Address</label>
              <textarea
                id="name"
                className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
              ></textarea>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <label className="text-lg">Scheduled Delivery</label>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="note">Note</label>
                <input type="text" id="note" className="mt-3" />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label className="mb-3" htmlFor="name">
                  Date
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label className="text-lg">Payment method</label>
              <div className="flex gap-5 mt-5">
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg w-full">
          <h1 className="mb-2">Order Summery</h1>
          <div className="border border-gray-300 rounded-md h-[60vh] p-10 flex flex-col">
            <div className="flex-grow  mb-2 space-y-2 overflow-auto">
              {products.map((product) => (
                <div className="flex justify-between items-center bg-gray-100 p-1 rounded-lg">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      className="h-[82px] rounded-md mr-2"
                      alt=""
                    />
                    <div>
                      <h1 className="text-lg mb-2">{product.title}</h1>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl mr-5">{product.quantity}</h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-lg">
                <p>Subtotal</p>
                <p>{total.toFixed(2)}$</p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Delivery</p>
                <p>4.5$</p>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>{(total + 4.5).toFixed(2)}$</p>
              </div>
              <button className="w-full border-2 border-purple-300 rounded-md px-3 py-1">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
