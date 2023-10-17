/**
 * Модель перевозчика
 */
export class Carrier {
  public id: number;
  private cardNumber: number;

  constructor(id: number, cardNumber: number) {
    this.id = id;
    this.cardNumber = cardNumber;
  }

  public getCardNumber(): number {
    return this.cardNumber;
  }

  public getId(): number {
    return this.id;
  }
}
