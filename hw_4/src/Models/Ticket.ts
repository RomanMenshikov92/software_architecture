/**
 * Модель билета
 */
export class Ticket {
  private id: number;
  public date: Date;
  public routeNumber: number;
  private zoneStart: number;
  private zonaStop: number;
  private price: number;
  private timeStart: Date;
  private timeStop: Date;
  public valid: boolean;
  private isUsed: boolean;
  private place: number;

  constructor(routeNumber: number, place: number, price: number, date: Date, valid: boolean) {
    this.routeNumber = routeNumber;
    this.place = place;
    this.price = price;
    this.date = date;
    this.valid = valid;
  }

  getDate(): Date {
    return this.date;
  }

  getRouteNumber(): number {
    return this.routeNumber;
  }

  getPrice(): number {
    return this.price;
  }

  getValid(): boolean {
    return this.valid;
  }

  getPlace(): number {
    return this.place;
  }

  setZoneStart(zoneStart: number): void {
    this.zoneStart = zoneStart;
  }

  setZoneStop(zonaStop: number): void {
    this.zonaStop = zonaStop;
  }

  setValid(valid: boolean): void {
    this.valid = valid;
  }

  setUsed(used: boolean): void {
    this.isUsed = used;
  }

  toString(): string {
    return (
      "Ticket" +
      " Route Number " +
      this.routeNumber +
      ", Place " +
      this.place +
      ", Price " +
      this.price +
      " rub." +
      ", Date " +
      this.date +
      ", " +
      (this.valid ? "Free" : "Busy")
    );
  }

  toPrint(): string {
    return "Ticket" + "\nRoute Number " + this.routeNumber + "\nPlace " + this.place + "\nPrice " + this.price + "rub." + "\nDate " + this.date;
  }

  hashCode(): number {
    return this.date.getTime() ^ (this.routeNumber + this.place + this.price);
  }

  equals(obj: any): boolean {
    if (obj == null || obj.constructor !== this.constructor) {
      return false;
    }
    return this.equalsTicket(obj as Ticket);
  }

  private equalsTicket(ticket: Ticket): boolean {
    return (
      ticket != null &&
      ticket.getRouteNumber() === this.routeNumber &&
      ticket.getPlace() === this.place &&
      ticket.getPrice() === this.price &&
      ticket.getDate().getTime() === this.date.getTime() &&
      ticket.hashCode() === this.hashCode()
    );
  }
}
