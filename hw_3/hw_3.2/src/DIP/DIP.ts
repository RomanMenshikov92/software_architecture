// код в соответствии с Dependency Inversion Principle
export interface Engine {
  start(): void;
}

export class Car_auto {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start() {
    this.engine.start();
  }
}

export class PetrolEngine implements Engine {
  start() {
    console.log("Petrol engine started.");
  }
}

export class DieselEngine implements Engine {
  start() {
    console.log("Diesel engine started.");
  }
}
