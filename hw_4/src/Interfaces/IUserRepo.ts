import { User } from "../Models/User";

/**
 * Интерфейс взаимодействия с базой клиентов
 */
export interface IUserRepo {
  /**
   * Создать нового пользователя
   *
   * @param userName
   * @param passwordHash
   * @param cardNumber
   * @return
   */
  create(userName: string, passwordHash: number, cardNumber: number): number;

  /**
   * получить пользователя по ID (для тестов, в приложении не используется)
   *
   * @param id
   * @return
   */
  read(id: number): User;

  /**
   * Получить пользователя по имени
   *
   * @param userName
   * @return
   */
  read(userName: string): User;

  /**
   * Получить список пользователей (для тестов, в приложении не используется)
   *
   * @return
   */
  readAll(): User[];

  /**
   * Обновить пользователя (для тестов, в приложении не используется)
   *
   * @param client
   * @return
   */
  update(client: User): boolean;

  /**
   * Удалить пользователя (для тестов, в приложении не используется)
   *
   * @param client
   * @return
   */
  delete(client: User): boolean;
}
