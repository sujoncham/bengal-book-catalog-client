import { ChangeEvent, FormEvent, useState } from "react";
import img from "../assets/5.jpg";
import {
  useCommentPostMutation,
  useSingleProductCommentQuery,
} from "../redux/api/apiSlice";

interface IProps {
  id: string;
}
const BookReview = ({ id }: IProps) => {
  const [input, setInput] = useState<string>("");
  const [commentPost, { isLoading, isError, isSuccess }] =
    useCommentPostMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const { data: product } = useSingleProductCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  console.log(product);

  const handleComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    const options = {
      id: id,
      data: { comment: input },
    };
    commentPost(options);
    setInput("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div className="mb-10">
        <h1>Id : {id}</h1>
        <form onSubmit={handleComment}>
          <div>
            <label htmlFor="email">Enter comment</label>

            <textarea
              name="input"
              required
              onChange={handleChange}
              className="border-2 border-purple-500 rounded-md w-full py-3 px-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="border-2 border-purple-500 rounded-md mt-5 py-3 px-2"
          >
            comment
          </button>
        </form>
      </div>
      {product?.blog?.comments?.map((comment: string, index: number) => (
        <div key={index} className="bg-gray-300 px-3 py-2 rounded-md mb-3">
          <div className="flex justify-start items-center gap-3">
            <img
              src={img}
              alt=""
              className="w-12 h-12 rounded-full border-2 border-purple-500"
            />
            <div>
              <p>mahafuz</p>
              <p className="text-[10px]">aug 12, 23</p>
            </div>
          </div>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default BookReview;
