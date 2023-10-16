// код SpeedCalculation в соответствии с Open-Closed Principle
export class SpeedCalculation {
  static calculateAllowedSpeed(vehicle: Vehicle): number {
    return vehicle.calculateAllowedSpeed();
  }
}

export abstract class Vehicle {
  protected maxSpeed: number;
  protected type: string;

  constructor(maxSpeed: number, type: string) {
    this.maxSpeed = maxSpeed;
    this.type = type;
  }

  abstract calculateAllowedSpeed(): number;

  getMaxSpeed(): number {
    return this.maxSpeed;
  }

  getType(): string {
    return this.type;
  }
}

// Созданы два дополнительных класса Car и Bus. Написан метод calculateAllowedSpeed()
export class Car extends Vehicle {
  calculateAllowedSpeed(): number {
    return this.getMaxSpeed() * 0.8;
  }
}

export class Bus extends Vehicle {
  calculateAllowedSpeed(): number {
    return this.getMaxSpeed() * 0.6;
  }
}
