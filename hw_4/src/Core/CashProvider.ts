import { ICarrierRepo } from "../Interfaces/ICarrierRepo";
import { ICashRepo } from "../Interfaces/ICashRepo";
import { Carrier } from "../Models/Carrier";
import { Ticket } from "../Models/Ticket";
import { User } from "../Models/User";
import { CarrierRepository } from "../Services/CarrierRepository";
import { CashRepository } from "../Services/CashRepository";

/*
 * Класс - провайдер для взаимодействия с банком и базой перевозчиков
 */
export class CashProvider {
  private cardNumber: number;
  private isAuthorized: boolean = false;
  private carrierRepository: ICarrierRepo;
  private cashRepository: ICashRepo;

  /**
   * Конструктор класса
   */
  constructor() {
    // Класс репозитория находится в единственном экземпляре для того, чтобы не создавать несколько подключений
    // к базе данных. Реализация паттерна Синглтон.
    this.carrierRepository = CarrierRepository.getCarrierRepository();
    this.cashRepository = CashRepository.getCashRepository();
  }

/**
 * Метод покупки билета
 *
 * @param {Ticket} ticket - билет
 * @return результат выполнения операции. True - если операция выполнена успешно, иначе false
 * @throws - если не выполнены условия для покупки билета
 */
  public buy(ticket: Ticket): boolean {
    if (this.isAuthorized) {
      const carrier: Carrier = this.carrierRepository.read(1);
      return this.cashRepository.transaction(ticket.getPrice(), this.cardNumber, carrier.getCardNumber());
    }
    return false;
  }

  /**
   * Метод авторизации клиента. Здесь должно быть реализовано обращение к банку для подтверждения личности клиента.
   *
   *  @param {User} client - клиент, для которого производится авторизация
   */
  public authorization(client: User): void {
    // Здесь должна быть реализована сверка аккаунта приложения и банковского аккаунта.
    this.cardNumber = client.getCardNumber();
    this.isAuthorized = true;
  }
}
