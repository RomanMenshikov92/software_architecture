import { PoligonalModel } from "../Model_Elements/PoligonalModel";
import { Scene } from "../Model_Elements/Scene";
import { Flash } from "../Model_Elements/Flash";
import { Camera } from "../Model_Elements/Camera";
import { iModelChangeObserver } from "./IModelChangedObserver";
import { iModelChanger } from "./iModelChanger";

export class ModelStore implements iModelChanger {
  models: PoligonalModel[];
  scenes: Scene[];
  flashes: Flash[];
  cameras: Camera[];
  changeObservers: iModelChangeObserver[];

  constructor(changeObservers: iModelChangeObserver[]) {
    this.changeObservers = changeObservers;
    this.models = [new PoligonalModel([])];
    this.scenes = [];
    this.flashes = [new Flash()];
    this.cameras = [new Camera()];

    const scene = new Scene(0, this.models, this.flashes, this.cameras);
    this.scenes.push(scene);
  }

  getScena(id: number): Scene | null {
    for (let i = 0; i < this.scenes.length; i++) {
      if (this.scenes[i].id === id) {
        return this.scenes[i];
      }
    }
    return null;
  }

  NotifyChange(sender: iModelChangeObserver): void {}
}
