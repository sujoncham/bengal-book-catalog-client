const Checkout = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="h-screen grid grid-cols-3">
          <div className="lg:col-span-2 col-span-3 space-y-8 px-12 border-2 border-green-800 py-10">
            <div className="rounded-md">
              <form id="payment-form" method="POST" action="">
                <section>
                  <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                    Shipping & Billing Information
                  </h2>
                  <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Name</span>
                      <input
                        name="name"
                        className="focus:outline-none px-3"
                        placeholder="your name"
                        required
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Email</span>
                      <input
                        name="email"
                        type="email"
                        className="focus:outline-none px-3"
                        placeholder="try@example.com"
                        required
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Address</span>
                      <input
                        name="address"
                        className="focus:outline-none px-3"
                        placeholder="your address"
                      />
                    </label>
                    <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                      <span className="text-right px-2">District</span>
                      <div className="focus:outline-none px-3 w-full flex items-center">
                        <select
                          name="division"
                          className="border-none bg-transparent px-3 flex-1 cursor-pointer appearance-none focus:outline-none"
                        >
                          <option value="dha">Dhaka</option>
                          <option value="raj">Rajshahi</option>
                          <option value="set">Sylhet</option>
                          <option value="khu">Khulna</option>
                          <option value="cha">Chattagram</option>
                          <option value="mym">Mymensingh</option>
                          <option value="bar">Barisal</option>
                          <option value="ran">Rangpur</option>
                          <option value="Dha" selected>
                            Dhaka
                          </option>
                        </select>
                      </div>
                    </label>
                    <label className="inline-flex w-2/4 border-gray-200 py-3">
                      <span className="text-right px-2">Division</span>
                      <select
                        name="division"
                        className="border-none bg-transparent px-3 flex-1 cursor-pointer appearance-none focus:outline-none"
                      >
                        <option value="dha">Dhaka</option>
                        <option value="raj">Rajshahi</option>
                        <option value="set">Sylhet</option>
                        <option value="khu">Khulna</option>
                        <option value="cha">Chattagram</option>
                        <option value="mym">Mymensingh</option>
                        <option value="bar">Barisal</option>
                        <option value="ran">Rangpur</option>
                        <option value="Dha" selected>
                          Dhaka
                        </option>
                      </select>
                    </label>
                    <label className="xl:w-1/4 xl:inline-flex items-center flex xl:border-none border-t border-gray-200 py-3">
                      <span className="text-right px-2 xl:px-0 xl:text-none">
                        ZIP
                      </span>
                      <input
                        name="postal_code"
                        className="focus:outline-none px-3"
                        placeholder="1207"
                      />
                    </label>
                    <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                      <span className="text-right px-2">Country</span>
                      <div className="focus:outline-none px-3 w-full flex items-center">
                        <select
                          name="country"
                          className="border-none bg-transparent px-3 flex-1 cursor-pointer appearance-none focus:outline-none"
                        >
                          <option value="dha">Dhaka</option>
                          <option value="raj">Rajshahi</option>
                          <option value="set">Sylhet</option>
                          <option value="khu">Khulna</option>
                          <option value="cha">Chattagram</option>
                          <option value="mym">Mymensingh</option>
                          <option value="bar">Barisal</option>
                          <option value="ran">Rangpur</option>
                          <option value="Dha" selected>
                            Dhaka
                          </option>
                        </select>
                      </div>
                    </label>
                  </fieldset>
                </section>
              </form>
            </div>
            <div className="rounded-md">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Payment Information
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Card</span>
                    <input
                      name="card"
                      className="focus:outline-none px-3 w-full"
                      placeholder="Card number MM/YY CVC"
                      required
                    />
                  </label>
                </fieldset>
              </section>
            </div>
            <button className="submit-button px-4 py-3 rounded-full bg-green-800 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
              Pay €846.98
            </button>
          </div>
          <div className="col-span-1 bg-gray-200 lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
              Order Summary
            </h1>
            <ul className="py-6 border-b space-y-6 px-8">
              <li className="grid grid-cols-6 gap-2 border-b-1">
                <div className="col-span-1 self-center">
                  <img
                    src="https://bit.ly/3oW8yej"
                    alt="Product"
                    className="rounded w-full"
                  />
                </div>
                <div className="flex flex-col col-span-3 pt-2">
                  <span className="text-gray-600 text-md font-semi-bold">
                    Studio 2 Headphone
                  </span>
                  <span className="text-gray-400 text-sm inline-block pt-2">
                    Red Headphone
                  </span>
                </div>
                <div className="col-span-2 pt-3">
                  <div className="flex items-center space-x-2 text-sm justify-between">
                    <span className="text-gray-400">2 x €30.99</span>
                    <span className="text-pink-400 font-semibold inline-block">
                      €61.98
                    </span>
                  </div>
                </div>
              </li>
              <li className="grid grid-cols-6 gap-2 border-b-1">
                <div className="col-span-1 self-center">
                  <img
                    src="https://bit.ly/3lCyoSx"
                    alt="Product"
                    className="rounded w-full"
                  />
                </div>
                <div className="flex flex-col col-span-3 pt-2">
                  <span className="text-gray-600 text-md font-semi-bold">
                    Apple iPhone 13
                  </span>
                  <span className="text-gray-400 text-sm inline-block pt-2">
                    Phone
                  </span>
                </div>
                <div className="col-span-2 pt-3">
                  <div className="flex items-center space-x-2 text-sm justify-between">
                    <span className="text-gray-400">1 x €785</span>
                    <span className="text-pink-400 font-semibold inline-block">
                      €785
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="px-8 border-b">
              <div className="flex justify-between py-4 text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-pink-500">€846.98</span>
              </div>
              <div className="flex justify-between py-4 text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-pink-500">Free</span>
              </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
              <span>Total</span>
              <span>€846.98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;