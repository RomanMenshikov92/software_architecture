import { Carrier } from "../Models/Carrier";

/*
 * Интерфейс взаимодействия с базой перевозчиков
 */
export interface ICarrierRepo {
  /*
   * Получить модель перевозчика из базы по ID
   *
   * @param id идентификатор перевозчика в базе
   * @return
   */
  read(id: number): Carrier;
}
