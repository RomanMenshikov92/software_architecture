import { ItemReward } from "./ItemReward";

export class Platinum extends ItemReward {
  public open(): void {
    console.log("Platinum!");
  }
}