import { ICustomer } from "../Interfaces/ICustomer";
import { Ticket } from "../Models/Ticket";
import { User } from "../Models/User";
import { TicketProvider } from "../Core/TicketProvider";
import { CashProvider } from "../Core/CashProvider";
import { UserProvider } from "../Core/UserProvider";

/*
 * Класс, содержащий основную логику покупки билетов
 */
export class Customer implements ICustomer {
  private ticketProvider: TicketProvider;
  private cashProvider: CashProvider;
  private userProvider: UserProvider;
  private client: User;
  private selectedTickets: Ticket[];

  /*
   * Конструктор класса
   */
  constructor() {
    // Здесь создаются экземпляры классов работы с базами данных
    // Так как при уничтожении класса Customer нам больше не нужны экземпляры классов - провайдеров,
    // было решено организовать композицию с классами - провайдерами.
    this.cashProvider = new CashProvider();
    this.ticketProvider = new TicketProvider();
    this.userProvider = new UserProvider();
  }

  getSelectedTickets(): Ticket[] {
    return this.selectedTickets;
  }

  setSelectedTickets(selectedTickets: Ticket[]): void {
    this.selectedTickets = selectedTickets;
  }

  getUserProvider(): UserProvider {
    return this.userProvider;
  }

  getUser(): User {
    return this.client;
  }

  setUser(client: User): void {
    this.client = client;
  }

  buyTicket(ticket: Ticket): boolean {
    let flag: boolean;
    this.cashProvider.authorization(this.client);
    flag = this.cashProvider.buy(ticket);
    if (flag) {
      flag = this.ticketProvider.updateTicketStatus(ticket);
    }
    return flag;
  }

  searchTicket(date: Date, route: number): Ticket[] {
    const result: Ticket[] = [];
    const list = this.ticketProvider.getTickets(route);
    for (const ticket of list) {
      if (ticket.date === date) {
        result.push(ticket);
      }
    }
    if (result.length === 0) {
      throw new Error("There are no tickets for this date");
    }
    return result;
  }
}
