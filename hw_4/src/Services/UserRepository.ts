import { hashCode } from "hashcode";

import { IUserRepo } from "../Interfaces/IUserRepo";
import { User } from "../Models/User";

export class UserRepository implements IUserRepo {
  private static clientRepository: UserRepository;
  private clients: User[];

  private constructor() {
    // имитация работы базы клиентов
    this.clients = [
      new User(1, "Ivan", hashCode().value("1111"), 2),
      new User(2, "Vasiliy", hashCode().value("2222"), 3),
      new User(3, "Fedor", hashCode().value("3333"), 4),
      new User(4, "Grigoriy", hashCode().value("4444"), 5),
    ];
  }

  public static getClientRepository(): UserRepository {
    if (!UserRepository.clientRepository) {
      UserRepository.clientRepository = new UserRepository();
    }
    return UserRepository.clientRepository;
  }

  public create(userName: string, passwordHash: number, cardNumber: number): number {
    const id = this.clients.length + 1;
    const client = new User(id, userName, passwordHash, cardNumber);

    for (const currentClient of this.clients) {
      if (currentClient.getId() === client.getId()) {
        throw new Error("A client already exists");
      }
    }

    this.clients.push(client);
    return client.getId();
  }

  public read(id: number | string): User {
    for (const client of this.clients) {
      if (client.getId() === id) {
        return client;
      }
    }
    throw new Error("A client with this ID not found");
  }

  public readByName(userName: string): User {
    for (const client of this.clients) {
      const clientName = client.getUserName();
      if (clientName === userName) {
        return client;
      }
    }
    throw new Error("A client with this ID not found");
  }

  public readAll(): User[] {
    if (this.clients.length === 0) {
      throw new Error("List of clients is empty");
    }
    return this.clients;
  }

  public update(client: User): boolean {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].getId() === client.getId()) {
        this.clients.splice(i, 1, client);
        return true;
      }
    }
    return false;
  }

  public delete(client: User): boolean {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].equals(client)) {
        this.clients.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
