import { create } from "./http-service";

export interface Product {
  id: number;
  name: string;
}

export default create("/products");
