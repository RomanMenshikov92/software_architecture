import { ICashRepo } from "../Interfaces/ICashRepo";
import { BankAccount } from "../Models/BankAccount";

/**
 * Класс репозиторий для имитации работы с базой данных банка
 */
export class CashRepository implements ICashRepo {
  private static cashRepository: CashRepository;

  private clients: BankAccount[];

  public getClients(): BankAccount[] {
    return this.clients;
  }

  private constructor() {
    // имитация работы банка
    this.clients = [];
    for (let i = 1; i <= 5; i++) {
      this.clients.push(new BankAccount());
    }
  }

  public static getCashRepository(): CashRepository {
    if (CashRepository.cashRepository == null) {
      CashRepository.cashRepository = new CashRepository();
    }
    return CashRepository.cashRepository;
  }

  public transaction(payment: number, cardFrom: number, carrierCard: number): boolean {
    // Проводим валидацию аккаунтов
    let from: BankAccount | null = null;
    let to: BankAccount | null = null;
    for (let client of this.clients) {
      if (client.getCard() == cardFrom) {
        from = client;
      }
      if (client.getCard() == carrierCard) {
        to = client;
      }
    }
    // Проверяем наличие банковских карт продавца и покупателя
    if (from == null) {
      throw new Error("No withdrawal account.");
    }
    if (to == null) {
      throw new Error("No money account.");
    }
    // Проверяем баланс средств на картах
    if (from.getBalance() - payment < 0) {
      throw new Error("Insufficient funds.");
    }
    if (to.getBalance() > Number.MAX_SAFE_INTEGER - payment) {
      throw new Error("Too much amount.");
    }
    // Блок finally выполнится в любом случае, даже если произойдет исключение.
    // Помещая операции по переводу денег в блок finally, мы создаем дополнительную безопасность
    // проведения транзакции.
    try {
      // Провести операции по переводу денег
    } finally {
      this.clients = this.clients.filter((client) => client.getCard() !== from!.getCard() && client.getCard() !== to!.getCard());
      from.setBalance(from.getBalance() - payment);
      to.setBalance(to.getBalance() + payment);
      this.clients.push(from);
      this.clients.push(to);
    }
    return true;
  }
}
