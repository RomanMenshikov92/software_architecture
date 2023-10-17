/**
 * Модель банковского аккаунта
 */
export class BankAccount {
  private card: number;
  private balance: number;

  constructor() {
    this.balance = 1000;
  }

  getCard(): number {
    return this.card;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(balance: number): void {
    this.balance = balance;
  }

  toString(): string {
    return `BankAccount { card= ${String(this.card).padStart(16, "0")}, balance= ${this.balance} }`;
  }
}
