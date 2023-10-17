import { ITicketRepo } from '../Interfaces/ITicketRepo';
import { Ticket } from '../Models/Ticket';
import { TicketRepository } from '../Services/TicketRepository';

/**
 * Класс - провайдер для работы с базой данных билетов
 */
export class TicketProvider {
  private ticketRepo: ITicketRepo;

  constructor() {
    // Класс репозитория находится в единственном экземпляре для того, чтобы не создавать несколько подключений
    // к базе данных. Реализация паттерна Синглтон.
    this.ticketRepo = TicketRepository.getTicketRepository();
  }

  /**
   * Метод получения билетов из базы данных
   *
   * @param routeNumber номер маршрута
   * @return список билетов
   * @throws RuntimeException
   */
  public getTickets(routeNumber: number): Ticket[] {
    return this.ticketRepo.readAll(routeNumber);
  }

  /**
   * Метод обновления статуса билета
   *
   * @param ticket билет
   * @return результат выполнения операции
   */
  public updateTicketStatus(ticket: Ticket): boolean {
    // ticket.setValid(false);
    return this.ticketRepo.update(ticket);
  }
}