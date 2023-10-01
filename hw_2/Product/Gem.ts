import { ItemReward } from "./ItemReward";

export class Gem extends ItemReward {
  public open(): void {
    console.log("Gem!");
  }
}