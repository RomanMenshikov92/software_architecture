import { ProductItem } from "../Data/ProductItem";

export class Catalog {
  private item: ProductItem[];

  constructor() {
    this.item = [];
  }

  public home(): void {
    // Code for the home page of the catalog
  }

  public selectionCategory(): void {
    // Code for selecting a category in the catalog
  }

  public addProductCart(): void {
    // Code for adding a product to the cart
  }
}

export interface ISearch {
  searchItem(): void;
}

export interface ISale {
  saleItem(): void;
}
