import { OrderItem } from "../Data/OrderItem";

export class Order {
  private item: OrderItem[];

  constructor() {
    this.item = [];
  }

  public home(): void {
    // Code for the home page of the order
  }

  public getTotalAmount(): number {
    // Code for calculating the total amount of the order
    return 0;
  }

  public placeOrder(): void {
    // Code for placing an order
  }
}

interface IPay {
  payItem(): void;
}

interface IDelivery {
  selectionDeliveryPickup(): void;
}
