const BookDetail = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="h-full w-full"
          />

          <div className="px-10 py-2">
            <h2 className="text-2xl font-bold tracking-tight uppercase">
              age not your factor, but hard work
            </h2>
            <p>John Kelvin</p>
            <p className="mt-6 text-lg leading-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>

            <p>Genre: Romantic Story</p>
            <p>Rating : 4</p>
            <p>Price $35.00</p>
            <p>Published : 20-02-2023 </p>
            <div className="mt-5">
              <button className="border-2 border-green-800 mr-2 px-2 py-1 rounded-md bg-green-800 text-white">
                add to card
              </button>

              <button className="border-2 border-green-800 mr-2 px-2 py-1 rounded-md bg-green-800 text-white">
                add to wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <p>Comment here</p>
            <form>
              <textarea
                placeholder="write your comment"
                className="border-2 border-green-800 mr-2 px-2 py-1 rounded-md w-full"
              />
              <button
                type="submit"
                className="border-2 border-green-800 mr-2 px-2 py-1 rounded-md bg-green-800 text-white"
              >
                add to card
              </button>
            </form>
          </div>
          <div className="bg-gray-200 mt-10 px-1 py-1 rounded-md">
            <div className="flex justify-start items-center">
              <img
                src=""
                alt=""
                className="w-12 h-12 rounded-full border-2 border-green-800 mr-2"
              />
              <p>Shakil Ahmed</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex
              eius vel, animi perspiciatis commodi harum officiis facere libero
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
