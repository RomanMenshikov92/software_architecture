import { ItemReward } from "./ItemReward";

export class Diamond extends ItemReward {
  public open(): void {
    console.log("Diamond!");
  }
}