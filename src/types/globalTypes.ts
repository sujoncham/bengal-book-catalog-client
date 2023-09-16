export interface IProduct {
  _id: number;
  userId: string;
  title: string;
  image: string;
  author: string;
  published: string;
  description: string;
  price: number;
  genre: string;
  status?: boolean;
  rating?: number;
  quantity?: number;
  reviews?: [string];
}
