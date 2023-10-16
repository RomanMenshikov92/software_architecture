import { TypeOfBody } from "../Enumerators/TypeOfBody";
import { TypeOfGearBox } from "../Enumerators/TypeOfGearBox";
import { TypeOfFuel } from "../Enumerators/TypeOfFuel";

export abstract class Car {
  private make: string;
  private model: string;
  private color: string;
  private typeOfBody: TypeOfBody;
  private numOfWheels: number;
  private typeOfGearBox: TypeOfGearBox;
  private typeOfFuel: TypeOfFuel;
  private engineCapacity: number;

  constructor(
    make: string,
    model: string,
    color: string,
    typeOfBody: TypeOfBody,
    numOfWheels: number,
    typeOfGearBox: TypeOfGearBox,
    typeOfFuel: TypeOfFuel,
    engineCapacity: number
  ) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.typeOfBody = typeOfBody;
    this.numOfWheels = numOfWheels;
    this.typeOfGearBox = typeOfGearBox;
    this.typeOfFuel = typeOfFuel;
    this.engineCapacity = engineCapacity;
  }

  public movement(): void {}

  public maintenance(): void {}

  public turnLight(): boolean {
    return true;
  }

  public turnWipers(): boolean {
    return true;
  }

  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getColor(): string {
    return this.color;
  }

  public getTypeOfBody(): TypeOfBody {
    return this.typeOfBody;
  }

  public getNumOfWheels(): number {
    return this.numOfWheels;
  }

  public getTypeOfGearBox(): TypeOfGearBox {
    return this.typeOfGearBox;
  }

  public getTypeOfFuel(): TypeOfFuel {
    return this.typeOfFuel;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }

  public setMake(make: string): void {
    this.make = make;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public setTypeOfBody(typeOfBody: TypeOfBody): void {
    this.typeOfBody = typeOfBody;
  }

  public setNumOfWheels(numOfWheels: number): void {
    this.numOfWheels = numOfWheels;
  }

  public setTypeOfGearBox(typeOfGearBox: TypeOfGearBox): void {
    this.typeOfGearBox = typeOfGearBox;
  }

  public setTypeOfFuel(typeOfFuel: TypeOfFuel): void {
    this.typeOfFuel = typeOfFuel;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }
}
