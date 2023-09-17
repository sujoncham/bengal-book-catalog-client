import { ChangeEvent, useState } from "react";

import axios from "axios";
import { useAppSelector } from "../redux/hooks";

const Checkout = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: user.email || "",
    address: "",
    city: "",
    date: "",
    cash: "Cash On Delivery",
    note: "",
    subtotal: total.toFixed(2),
    DeliCharge: "4.50",
    total: (total + 4.5).toFixed(2),
    products: products.map((product) => ({
      _id: product._id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/api/v1/checkout/addCheckout", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          console.log("inserted", data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-5 py-5 h-auto">
      <div className="border-2 border-green-800 h-28 flex justify-center items-center">
        <h1 className="text-3xl font-bold py-5 text-center text-green-800">
          Checkout Information
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
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
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleInputChange}
                      value={user.email || ""}
                      className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                    />
                  </div>
                </div>
                <div className="w-full space-y-5">
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-2 w-full border-purple-300 rounded-md px-3 py-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-2 w-full border-2 border-purple-300 rounded-md px-3 py-1"
                ></textarea>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <label className="text-lg">Scheduled Delivery</label>
              </div>
              <div className="flex gap-5 mt-2">
                <div className="w-full flex flex-col mt-2">
                  <label className="mb-3" htmlFor="note">
                    Note
                  </label>
                  <input
                    type="text"
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    className="mt-1 border-2 border-purple-300 rounded-md px-3 py-1"
                  />
                </div>
                <div className="w-full flex flex-col mt-2">
                  <label className="mb-3" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="mt-1 border-2 border-purple-300 rounded-md px-3 py-1"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-lg">Payment method</label>
                <div className="flex gap-5 mt-5">
                  <input
                    type="cash"
                    className="mt-1 border-2 border-purple-300 rounded-md px-3 py-1"
                    value={"Cash And Devliver"}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-lg w-full">
            <h1 className="mb-2">Order Summery</h1>
            <div className="border border-gray-300 rounded-md h-[80vh] p-10 flex flex-col">
              <div className="flex-grow  mb-2 space-y-2 overflow-y-auto h-[200px]">
                {formData.products.map((product) => (
                  <div
                    key={product._id}
                    className="flex justify-between items-center bg-gray-100 p-1 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div>
                        <h1 className="text-lg mb-2">{product.title}</h1>
                        <p>Price: {product.price}</p>
                        <input type="text" hidden value={product.price} />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-4xl mr-5">{product.quantity}</h1>
                      <input type="text" hidden value={product.quantity} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-lg">
                  <p>Subtotal</p>
                  <p>${formData.subtotal}</p>
                  <input type="text" hidden value={formData.subtotal} />
                </div>
                <div className="flex justify-between text-lg">
                  <p>Delivery</p>
                  <p>${formData.DeliCharge}</p>
                  <input type="text" hidden value={formData.DeliCharge} />
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <p>Total</p>
                  <p>${formData.total}</p>
                </div>
                <button
                  type="submit"
                  className="w-full border-none bg-green-600 hover:bg-green-700 rounded-md px-3 py-1"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
