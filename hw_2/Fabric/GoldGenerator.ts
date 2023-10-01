import { iGameItem } from "../Interface/iGameItem";
import { Gold } from "../Product/Gold";
import { ItemGenerator } from "./ItemGenerator";

export class GoldGenerator extends ItemGenerator {
  public createDiamond(): iGameItem {
      throw new Error("Method not implemented.");
  }
  public createItem(): iGameItem {
    return new Gold();
  }
}