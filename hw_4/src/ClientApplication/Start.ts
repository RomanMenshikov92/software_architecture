import { hashCode } from "hashcode";

import { ICustomer } from "../Interfaces/ICustomer";
import { Customer } from "../Core/Customer";
import { Ticket } from "../Models/Ticket";
import { EnterData } from "../ClientApplication/EnterData";
import { Authentication } from "../ClientApplication/Authentication";

/**
 * Основной класс клиентского приложения.
 */
export class Start extends EnterData {
  // Связь с основной логикой осуществляется через интерфейс ICustomer.
  private customer: ICustomer;
  private ticketRouteNumber: number;
  private ticketDate: Date | null;

  /**
   * Метод запуска меню входа и регистрации
   */
  public runLoginRegisterMenu(): void {
    let run: boolean = true;
    while (run) {
      this.printMessageLine("Application for buying bus tickets");
      this.printMessageLine("This is a test version. The data base is not available in full mode.");
      this.printMessageLine("To login\t\t\tenter 1\nTo register\t\t\tenter 2\nTo exit\t\t\t\tenter 0");
      console.log("Enter your choice > ");
      let choice: number = 0;
      try {
        choice = this.inputInt(0, 2);
      } catch (ex) {
        console.error(ex.message);
        continue;
      }
      run = this.runLoginRegisterMenuChoiceLogic(choice);
    }
  }
  /**
   * Логика ветвления запуска программы
   *
   * @param choice
   * @return
   */
  private runLoginRegisterMenuChoiceLogic(choice: number): boolean {
    switch (choice) {
      case 1:
        this.login();
        if (this.customer.getUser() == null) {
          break;
        } else {
          this.runBuyingMenu();
          break;
        }
      case 2:
        this.register();
        if (this.customer == null) {
          break;
        } else {
          this.runBuyingMenu();
          break;
        }
      default:
        return false;
    }
    return true;
  }
  /**
   * Меню входа зарегистрированного пользователя
   */
  private login(): void {
    this.printMessageLine("This is a test version. The data base is not available in full mode.");
    this.printMessageLine("Login");
    console.log("User name: ");
    let userName: string = this.inputString();
    console.log("Password: ");
    let passwordHash: number = hashCode().value(this.inputString());
    console.log("Enter the system... ");
    this.customer = new Customer();
    try {
      this.customer.setUser(Authentication.authentication(this.customer.getUserProvider(), userName, passwordHash));
    } catch (ex) {
      console.log("FAIL");
      console.error(ex.message);
      return;
    }
    this.printMessageLine("OK");
  }
  /**
   * Меню регистрации нового пользователя
   */
  private register(): void {
    this.printMessageLine("This is a test version. The data base is not available in full mode.");
    this.printMessageLine("Register");
    console.log("Enter user name: ");
    let userName: string = this.inputString();
    console.log("Enter password: ");
    let passwordHash: number = hashCode().value(this.inputString());
    console.log("Repeat password: ");
    let passwordHash2: number = hashCode().value(this.inputString());
    if (passwordHash != passwordHash2) {
      this.printMessageLine("Passwords do not match. Exit register.");
      return;
    }
    console.log("Enter card number: ");
    let cardNumber: number = this.inputLong(1, 9999999999999999);
    console.log("Register the system... ");
    this.customer = new Customer();
    let id: number;
    try {
      id = this.customer.getUserProvider().createClient(userName, passwordHash, cardNumber);
      this.customer.setUser(Authentication.authentication(this.customer.getUserProvider(), userName, passwordHash));
    } catch (ex) {
      console.log("FAIL");
      console.error(ex.message);
      return;
    }
    this.printMessageLine(`OK. user ${this.customer.getUser().getUserName()} with ID ${id} added to base.`);
  }
  /**
   * Меню покупки билетов
   */
  private runBuyingMenu(): void {
    let run: boolean = true;
    while (run) {
      this.printMessageLine("Application for buying bus tickets. | User " + this.customer.getUser().getUserName() + " |");

      this.printMessageLine("To select route number and print all tickets\tenter 1\n" + "To logout\t\t\t\t\t\t\t\t\t\tenter 0");

      let choice: number = 0;
      try {
        choice = this.inputInt(0, 1);
      } catch (ex) {
        this.printMessageLine(ex.getMessage());
        continue;
      }

      run = this.runBuyingMenuChoiceLogic(choice);
    }
  }

  /**
   * Логика ветвления меню покупки билетов
   *
   * @param choice
   * @return
   */
  private runBuyingMenuChoiceLogic(choice: number): boolean {
    switch (choice) {
      case 1:
        this.ticketRouteNumber = this.runSelectRouteMenu();
        if (this.ticketRouteNumber > 0) {
          this.ticketDate = this.runSelectDate();
          if (this.ticketDate != null) {
            try {
              this.customer.setSelectedTickets(this.customer.searchTicket(this.ticketDate, this.ticketRouteNumber));
            } catch (ex) {
              this.printMessageLine(ex.getMessage());
              return true;
            }
            this.printAllTickets(this.customer.getSelectedTickets());
            this.buyTicketMenu();
            return true;
          }
          return true;
        }
        return true;
      default:
        return false;
    }
  }

  /**
   * Метод ввода номера маршрута
   *
   * @return номер маршрута
   */
  private runSelectRouteMenu(): number {
    this.printMessageLine("Input route number and date. | User " + this.customer.getUser().getUserName() + " |");
    console.log("Route number > ");

    // Здесь ограничиваем число маршрутов. У нас всего 2 маршрута.
    let numRoute: number;
    try {
      numRoute = this.inputInt(1, 2);
    } catch (ex) {
      this.printMessageLine(ex.getMessage());
      return -1;
    }

    return numRoute;
  }

  /**
   * Метод ввода даты поездки
   *
   * @return дата поездки
   */
  private runSelectDate(): Date | null  {
    console.log("Date (format: YYYY-MM-DD) > ");

    // Здесь ограничиваем число маршрутов. У нас всего 2 маршрута.
    let date: Date;
    try {
      date = this.inputDate();
    } catch (ex) {
      this.printMessageLine(ex.getMessage());
      return null;
    }

    return date;
  }

  /**
   * Метод вывода в консоль списка билетов
   *
   * @param ticks список билетов
   */
  private printAllTickets(ticks: Ticket[]): void {
    for (let t of ticks) {
      console.log(t.toString());
    }
  }

  /**
   * Метод покупки билета
   */
  private buyTicketMenu(): void {
    this.printMessageLine("Confirm to buy. | User " + this.customer.getUser().getUserName() + " |");
    console.log("To buy a ticket for bus route " + this.ticketRouteNumber + " on the " + this.ticketDate + ' enter "Yes" > ');

    let answer: string = this.inputString();
    this.buyTicketMenuConfirmLogic(answer);
  }

  /**
   * Логика ветвления меню подтверждения покупки
   *
   * @param answer
   */
  private buyTicketMenuConfirmLogic(answer: string): void {
    if (answer.toLowerCase() === "yes") {
      for (let t of this.customer.getSelectedTickets()) {
        if (t.getDate() === this.ticketDate && t.getRouteNumber() == this.ticketRouteNumber && t.getValid()) {
          let flag: boolean = false;
          try {
            flag = this.customer.buyTicket(t);
          } catch (ex) {
            this.printMessageLine(ex.getMessage());
            return;
          }
          if (flag) {
            this.printMessageLine(t.toPrint());
            return;
          }
        }
      }
    }
  }

  /**
   * Метод вывода в консоль элемента сообщения
   *
   * @param message
   */
  private printMessageLine(message: string): void {
    console.log(message);
  }
}
