export interface IProduct {
  id: number;
  title: string;
  image: string;
  author: string;
  dated: string;
  price: number;
  genre: string;
  status?: boolean;
  rating?: number;
  quantity?: number;
  description?: string;
}
