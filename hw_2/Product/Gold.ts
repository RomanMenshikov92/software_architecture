import { ItemReward } from "./ItemReward";

export class Gold extends ItemReward {
  public open(): void {
    console.log("Gold!");
  }
}