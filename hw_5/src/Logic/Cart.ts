import { ProductItem } from "../Data/ProductItem";

export class Cart {
  private item: ProductItem[];

  constructor() {
    this.item = [];
  }

  public home(): void {
    // Code for the home page of the cart
  }

  public increaseProduct(): void {
    // Code for increasing the quantity of a product in the cart
  }

  public decreaseProduct(): void {
    // Code for decreasing the quantity of a product in the cart
  }

  public placeOrder(): void {
    // Code for placing an order
  }

  public deleteOrder(): void {
    // Code for deleting an order
  }

  public getTotalAmount(): number {
    // Code for calculating the total amount of the cart
    return 0;
  }
}
