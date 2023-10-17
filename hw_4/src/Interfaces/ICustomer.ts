import { Ticket } from "../Models/Ticket";
import { User } from "../Models/User";
import { UserProvider } from "../Core/UserProvider";

/**
 * Интерфейс взаимодействия с клиентским приложением
 */
export interface ICustomer {
  getSelectedTickets(): Ticket[];

  setSelectedTickets(selectedTickets: Ticket[]): void;

  getUser(): User;

  setUser(client: User): void;

  getUserProvider(): UserProvider;

  /**
   * Метод покупки билета
   *
   * @param ticket билет
   * @returns успешность выполненной операции
   * @throws Error
   */
  buyTicket(ticket: Ticket): boolean;

  /**
   * Метод поиска билетов по дате и номеру маршрута
   *
   * @param date дата
   * @param route номер маршрута
   * @returns список доступных для приобретения билетов
   * @throws Error
   */
  searchTicket(date: Date, route: number): Ticket[];
}
