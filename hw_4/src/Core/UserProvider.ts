import { IUserRepo } from "../Interfaces/IUserRepo";
import { User } from "../Models/User";
import { UserRepository } from "../Services/UserRepository";

/*
 * Класс - провайдер для работы с базой данных клиентов
 */
export class UserProvider {
  private clientRepository: IUserRepo;

  /*
   * Конструктор класса
   */
  constructor() {
    // Класс репозитория находится в единственном экземпляре для того, чтобы не создавать несколько подключений
    // к базе данных. Реализация паттерна Синглтон.
    this.clientRepository = UserRepository.getClientRepository();
  }

  /**
   * Метод создания нового клиента
   *
   * @param userName имя клиента
   * @param passwordHash хэш пароля
   * @param cardNumber номер банковской карты
   * @return ID клиента в базе
   * @throws Error
   */
  public createClient(userName: string, passwordHash: number, cardNumber: number): number {
    const id: number = this.clientRepository.create(userName, passwordHash, cardNumber);
    return id;
  }

  /**
   * Метод поиска клиента из базы по имени
   *
   * @param {User} userName имя клиента
   * @return модель клиента
   * @throws Error
   */
  public getClientByName(userName: string): User {
    const client: User = this.clientRepository.read(userName);
    return client;
  }

  /**
   * Метод получения списка всех клиентов (для реализации тестов и администрирования), не используется.
   *
   * @return {User} список клиентов
   * @throws Error
   */
  public getAllClients(): User[] {
    const clients: User[] = this.clientRepository.readAll();
    return clients;
  }
}
