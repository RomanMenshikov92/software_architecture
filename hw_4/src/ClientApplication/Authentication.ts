import { UserProvider } from "../Core/UserProvider";
import { User } from "../Models/User";

/**
 * Класс аутентификации пользователя.
 */
export class Authentication {
  /**
   * Метод производит аутентификацию.
   *
   * @param {UserProvider} userProvider - Провайдер пользователей.
   * @param {string} login - Логин пользователя.
   * @param {number} passHash - Хэш пароля пользователя.
   * @return {User} - Аутентифицированный пользователь.
   * @throws {Error} - Если аутентификация не удалась.
   */
  public static authentication(userProvider: UserProvider, login: string, passHash: number): User {
    const client = userProvider.getClientByName(login);
    if (client.getHashPassword() === passHash) {
      return client;
    } else {
      throw new Error("Authentication fail");
    }
  }
}
