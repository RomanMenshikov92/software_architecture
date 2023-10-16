import { Car } from "./Car";
import { TypeOfBody } from "../Enumerators/TypeOfBody";
import { TypeOfFuel } from "../Enumerators/TypeOfFuel";
import { TypeOfGearBox } from "../Enumerators/TypeOfGearBox";
import { IFuelStation } from "../Interfaces/IFuelStation";
import { IWipingCar } from "../Interfaces/IWipingCar";

export class Pickup extends Car implements IFuelStation, IWipingCar {
  private loadCapacity: number;

  constructor(
    make: string,
    model: string,
    color: string,
    numOfWheels: number,
    typeOfGearBox: TypeOfGearBox,
    typeOfFuel: TypeOfFuel,
    engineCapacity: number,
    loadCapacity: number
  ) {
    super(make, model, color, TypeOfBody.PICKUP, numOfWheels, typeOfGearBox, typeOfFuel, engineCapacity);
    this.loadCapacity = loadCapacity;
  }

  fuel(): void {
    throw new Error("Unimplemented method 'fuel'");
  }

  wipWindShilde(): void {
    throw new Error("Unimplemented method 'wipWindShilde'");
  }

  wipHeadLights(): void {
    throw new Error("Unimplemented method 'wipHeadLights'");
  }

  wipMirrows(): void {
    throw new Error("Unimplemented method 'wipMirrows'");
  }
}
