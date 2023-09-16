import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../utils/firebase.init";
const AddBook = () => {
  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published: "",
    description: "",
    genre: "",
    price: "",
    image: null as File | null,
    userId: user?.uid || "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0] as File | undefined; // Type assertion
    setFormData({ ...formData, image: imageFile || null });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:5000/api/v1/books/addNewBook", formData, options)
      .then((data) => {
        console.log("inserted", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Book
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="userId"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              UserId
            </label>
            <div className="mt-2">
              <input
                name="userId"
                type="text"
                value={formData.userId}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="author"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Author
              </label>
            </div>
            <div className="mt-2">
              <input
                name="author"
                type="text"
                value={formData.author}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="genre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Genre
              </label>
            </div>
            <div className="mt-2">
              <input
                name="genre"
                type="text"
                value={formData.genre}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
            </div>
            <div className="mt-2">
              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="published"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Published
              </label>
            </div>
            <div className="mt-2">
              <input
                name="published"
                type="date"
                value={formData.published}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
            </div>
            <div className="mt-2">
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700"
            >
              create book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
