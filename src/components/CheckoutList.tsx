/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";

const CheckoutList = () => {
  const [checkoutList, setCheckoutList] = useState([]);
  console.log(checkoutList);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/checkout/checkout"
        );
        console.log("inserted", response.data);
        setCheckoutList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="px-10">
      <div>
        <h1 className="text-3xl font-bold py-5">All CheckList</h1>
      </div>
      {checkoutList.map((checkoutItem: any) => (
        <div
          key={checkoutItem._id}
          className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 border-2 items-center px-5 py-1 mt-1 border-purple-300"
        >
          <p>Name: {checkoutItem.name}</p>
          <p>Email: {checkoutItem.email}</p>
          <p>City: {checkoutItem.city}</p>
          <div>
            <button className="border-2 border-purple-300 px-2 py-1 rounded-md">
              view
            </button>
            <button className="border-2 border-purple-300 px-2 py-1 rounded-md">
              del
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutList;
