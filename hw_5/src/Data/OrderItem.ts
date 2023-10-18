export class OrderItem {
  private id: number;
}

export abstract class Order {
  protected title: string;
  protected description: string;
  protected img: Blob;
  protected price: number;
  protected dateOrder: Date;
  protected priceOrder: number;
}

export class SQLOrders {
  // Code for SQL Orders
}
