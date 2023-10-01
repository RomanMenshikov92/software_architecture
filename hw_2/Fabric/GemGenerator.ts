import { iGameItem } from "../Interface/iGameItem";
import { Gem } from "../Product/Gem";
import { ItemGenerator } from "./ItemGenerator";
import { Diamond } from "../Product/Diamond";

export class GemGenerator extends ItemGenerator {
  public createItem(): iGameItem {
    return new Gem();
  }
  public createDiamond(): iGameItem {
    return new Diamond();
  }
}