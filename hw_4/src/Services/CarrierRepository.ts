import { ICarrierRepo } from "../Interfaces/ICarrierRepo";
import { Carrier } from "../Models/Carrier";

/**
 * Класс репозиторий для имитации работы с базой данных перевозчиков
 */
export class CarrierRepository implements ICarrierRepo {
  private static carrierRepository: CarrierRepository;
  private carriers: Carrier[];

  private constructor() {
    // Заполняем базу данных
    this.carriers = [];
    this.carriers.push(new Carrier(1, 1));
  }

  public static getCarrierRepository(): CarrierRepository {
    if (!CarrierRepository.carrierRepository) {
      CarrierRepository.carrierRepository = new CarrierRepository();
    }
    return CarrierRepository.carrierRepository;
  }

  public read(id: number): Carrier {
    const carrier = this.carriers.find((c) => c.id === id);
    if (carrier) {
      return carrier;
    }
    throw new Error("A carrier with this ID not found");
  }
}
