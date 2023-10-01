import { iGameItem } from "../Interface/iGameItem";

export abstract class ItemReward implements iGameItem {
  open(): void {
    throw new Error("Method not implemented.");
  }
}
