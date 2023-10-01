import { iGameItem } from "../Interface/iGameItem";
import { Platinum } from "../Product/Platinum";
import { ItemGenerator } from "./ItemGenerator";

export class PlatinumGenerator extends ItemGenerator {
  public createItem(): iGameItem {
    return new Platinum();
  }
}