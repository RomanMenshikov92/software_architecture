export class ProductItem {
  private id: number;
}

export abstract class Product {
  protected title: string;
  protected description: string;
  protected img: Blob;
  protected price: number;
}

export class SQLProducts {
  // Code for SQL Orders
}
