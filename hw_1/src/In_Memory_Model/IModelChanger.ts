import { iModelChangeObserver } from "./IModelChangedObserver";

export interface iModelChanger {
  NotifyChange(sender: iModelChangeObserver): void;
}
