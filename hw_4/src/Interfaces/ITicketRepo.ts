import { Ticket } from "../Models/Ticket";

/**
 * Интерфейс взаимодействия с базой билетов
 */
export interface ITicketRepo {
  /**
   * Создать новый билет
   *
   * @param ticket
   * @return
   */
  create(ticket: Ticket): boolean;

  /**
   * Получить список билетов по номеру маршрута
   *
   * @param routeNumber
   * @return
   */
  readAll(routeNumber: number): Ticket[];

  /**
   * Обновить билет
   *
   * @param ticket
   * @return
   */
  update(ticket: Ticket): boolean;

  /**
   * Удалить билет
   *
   * @param ticket
   * @return
   */
  delete(ticket: Ticket): boolean;
}
