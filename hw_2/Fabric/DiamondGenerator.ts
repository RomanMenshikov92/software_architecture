import { iGameItem } from "../Interface/iGameItem";
import { Gem } from "../Product/Gem";
import { ItemGenerator } from "./ItemGenerator";
import { Diamond } from "../Product/Diamond";

export class DiamondGenerator extends ItemGenerator {
  public createItem(): iGameItem {
    throw new Error("Method not implemented.");
  }
  public createDiamond(): iGameItem {
    return new Diamond();
  }
}
