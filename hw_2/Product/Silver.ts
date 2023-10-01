import { ItemReward } from "./ItemReward";

export class Silver extends ItemReward {
  public open(): void {
    console.log("Silver!");
  }
}