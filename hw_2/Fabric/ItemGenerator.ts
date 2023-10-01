import { iGameItem } from "../Interface/iGameItem";
import { Diamond } from "../Product/Diamond";

export abstract class ItemGenerator {
  public abstract createItem(): iGameItem;
  public abstract createDiamond(): iGameItem;

  public openReward(): void {
    this.createItem().open();
  }
}