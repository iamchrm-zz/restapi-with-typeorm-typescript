import { Category } from "./Category";

export interface productInterface {
  id: number;
  name: string;
  url_image: string;
  price: number;
  discount: number;
  category: Category;
}

