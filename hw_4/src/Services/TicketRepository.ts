import { ITicketRepo } from "../Interfaces/ITicketRepo";
import { Ticket } from "../Models/Ticket";

/**
 * Класс репозиторий для имитации работы с базой данных
 */
export class TicketRepository implements ITicketRepo {
  private static ticketRepository: TicketRepository;
  private tickets: Ticket[];

  private constructor() {
    // здесь симуляция работы с БД
    this.tickets = [];
    const strDate = "2022-10-27";
    const date = new Date(strDate);
    this.generateTickets(1, 6, 10, date);
    this.generateTickets(2, 4, 15, date);
  }

  public static getTicketRepository(): TicketRepository {
    if (!TicketRepository.ticketRepository) {
      TicketRepository.ticketRepository = new TicketRepository();
    }
    return TicketRepository.ticketRepository;
  }

  public create(ticket: Ticket): boolean {
    // функционал не используется
    this.tickets.push(ticket);
    return true;
  }

  public readAll(routeNumber: number): Ticket[] {
    const routeTickets: Ticket[] = [];
    for (const ticket of this.tickets) {
      if (ticket.routeNumber === routeNumber && ticket.valid) {
        routeTickets.push(ticket);
      }
    }
    if (routeTickets.length === 0) {
      throw new Error("There are no tickets for this bus.");
    }
    return routeTickets;
  }

  public update(ticket: Ticket): boolean {
    const index = this.tickets.findIndex((tick) => tick.equals(ticket));
    if (index !== -1) {
      this.tickets.splice(index, 1, ticket);
      return true;
    }
    return false;
  }

  public delete(ticket: Ticket): boolean {
    // функционал не используется
    const index = this.tickets.indexOf(ticket);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    }
    return false;
  }

  private generateTickets(routeNumber: number, countPlaces: number, price: number, date: Date): void {
    for (let i = 1; i <= countPlaces; i++) {
      this.tickets.push(new Ticket(routeNumber, i, price, date, true));
    }
  }
}
