import { hashCode } from "hashcode";

/**
 * Модель пользователя
 */
export class User {
  private id: number;
  private userName: string;
  private passportData: string;
  private birnDate: Date;
  private hashPassword: number;
  private cardNumber: number;

  constructor(id: number, userName: string, hashPassword: number, cardNumber: number) {
    this.id = id;
    this.userName = userName;
    this.hashPassword = hashPassword;
    this.cardNumber = cardNumber;
  }

  getId(): number {
    return this.id;
  }

  getUserName(): string {
    return this.userName;
  }

  getHashPassword(): number {
    return this.hashPassword;
  }

  getCardNumber(): number {
    return this.cardNumber;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  setHashPassword(hashPassword: number): void {
    this.hashPassword = hashPassword;
  }

  toString(): string {
    return `User { id= ${this.id}, userName= ${this.userName}, cardNumber= ${this.cardNumber.toString().padStart(16, "0")} }`;
  }

  equals(o: any): boolean {
    if (o == null || this.constructor !== o.constructor) return false;
    const user: User = o;
    return this.equalsUser(user);
  }

  private equalsUser(user: User): boolean {
    return this.id === user.id && this.hashPassword === user.hashPassword && this.cardNumber === user.cardNumber && this.userName === user.userName;
  }

  hashCode(): number {
    return hashCode().value(this.id).value(this.userName).value(this.hashPassword).value(this.cardNumber);
  }
}
