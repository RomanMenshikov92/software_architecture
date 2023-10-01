import { Flash } from '../Model_Elements/Flash';
import { PoligonalModel } from '../Model_Elements/PoligonalModel';
import { Camera } from '../Model_Elements/Camera';

export class Scene {
  id: number;
  Models: PoligonalModel[];
  Flashes: Flash[];
  Cameras: Camera[];

  constructor(id: number, models: PoligonalModel[], flashes: Flash[], cameras: Camera[]) {
    this.id = id;
    if (models.length > 0) {
      this.Models = models;
    } else {
      throw new Error("Должна быть одна модель");
    }
    this.Flashes = flashes;
    if (cameras.length > 0) {
      this.Cameras = cameras;
    } else {
      throw new Error("Должна быть одна камера");
    }
  }

  method1<T>(flash: T): T {
    return flash;
  }

  method2<T, E>(model: T, flash: E): T {
    return model;
  }
}
