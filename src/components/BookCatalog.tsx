import BookCard from "./BookCard";

const products = [
  {
    id: 1,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 45,
    image: "https://i.ibb.co/f0X72cP/book7.jpg",
  },
  {
    id: 2,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/19rTJp3/book6.jpg",
  },
  {
    id: 3,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 65,
    image: "https://i.ibb.co/HztS5MV/book5.jpg",
  },
  {
    id: 4,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/FK3qCQG/book4.jpg",
  },
  {
    id: 8,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/Pr1j4H8/book2.jpg",
  },
  {
    id: 9,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/Dp657dy/book1.jpg",
  },
  {
    id: 10,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/Mf7MtvF/book10.jpg",
  },
  {
    id: 5,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/HFc0rw2/book9.jpg",
  },
  {
    id: 6,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 35,
    image: "https://i.ibb.co/YD6DFyC/book8.jpg",
  },
  {
    id: 7,
    title: "Machined Mechanical Pencil",
    author: "becon gorge",
    genre: "becon gorge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda illo qui cumque explicabo, maiores dolore nostrum non blanditiis doloribus!",
    dated: "aug 20, 2023",
    price: 52,
    image: "https://i.ibb.co/NSjMXVw/book3.jpg",
  },
];

const BookCatalog = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <BookCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;
