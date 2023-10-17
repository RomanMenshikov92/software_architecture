import * as inStream from "readline-sync";

/**
 * Абстрактный класс валидации вводимых данных
 */
export abstract class EnterData {
  /**
   * Метод ввода и валидации целого числа в диапазоне
   *
   * @param {number} minVariant - минимальное число
   * @param {number} maxVariant - максимальное число
   * @returns {number} - введенное целое число
   * @throws {Error} - если введено некорректное значение
   */
  protected inputInt(minVariant: number, maxVariant: number): number {
    let num: number = 0;
    try {
      num = parseInt(inStream.question());
    } catch (ex) {
      throw new Error("This is not a number.");
    }
    if (num < minVariant || num > maxVariant) {
      throw new Error("You entered an invalid value.");
    }
    return num;
  }

  /**
   * Метод ввода и валидации целого числа в диапазоне
   *
   * @param {number} minVariant - минимальное число
   * @param {number} maxVariant - максимальное число
   * @returns {number} - введенное целое число
   * @throws {Error} - если введено некорректное значение
   */
  protected inputLong(minVariant: number, maxVariant: number): number {
    let num: number = 0;
    try {
      num = parseInt(inStream.question());
    } catch (ex) {
      throw new Error("This is not a number.");
    }
    if (num < minVariant || num > maxVariant) {
      throw new Error("You entered an invalid value.");
    }
    return num;
  }

  /**
   * Метод ввода строки и ее валидация на пустую строку
   *
   * @returns {string} - строка
   * @throws {Error} - если введена пустая строка
   */
  protected inputString(): string {
    let str: string;
    try {
      str = inStream.question();
    } catch (ex) {
      throw new Error("Something went wrong.");
    }
    if (str === "") {
      throw new Error("You must enter something.");
    }
    return str;
  }

  /**
   * Метод ввода даты и ее валидация
   *
   * @returns {Date} - дата
   * @throws {Error} - если введена некорректная дата
   */
  protected inputDate(): Date {
    const ft = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    let str: string;
    let date: Date;
    try {
      str = inStream.question();
    } catch (ex) {
      throw new Error("Something went wrong.");
    }
    if (str === "") {
      throw new Error("You must enter something.");
    }
    try {
      date = new Date(ft.format(new Date(str)));
    } catch (ex) {
      throw new Error("You must enter a valid date.");
    }
    return date;
  }
}
