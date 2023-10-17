/**
 * Интерфейс взаимодействия с базой банковских операций
 */
export interface ICashRepo {
  /**
   * Метод проведения транзакции
   *
   * @param payment  платеж
   * @param cardFrom карта покупателя
   * @param cardTo   карта продавца
   * @return результат выполнения операции
   */
  transaction(payment: number, cardFrom: number, cardTo: number): boolean;
}
