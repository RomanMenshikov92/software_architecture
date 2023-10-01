import { iGameItem } from "../Interface/iGameItem";
import { Silver } from "../Product/Silver";
import { ItemGenerator } from "./ItemGenerator";

export class SilverGenerator extends ItemGenerator {
  public createDiamond(): iGameItem {
    throw new Error("Method not implemented.");
  }
  public createItem(): iGameItem {
    return new Silver();
  }
}
