import { ItemGenerator } from "./Fabric/ItemGenerator";
import { GemGenerator } from "./Fabric/GemGenerator";
import { GoldGenerator } from "./Fabric/GoldGenerator";
import { SilverGenerator } from "./Fabric/SilverGenerator";
import { DiamondGenerator } from "./Fabric/DiamondGenerator";
import { PlatinumGenerator } from "./Fabric/PlatinumGenerator";

const f1: ItemGenerator = new GoldGenerator();
f1.openReward();

const generators: ItemGenerator[] = [];
for (let i = 0; i < 10; i++) {
  generators.push(new GoldGenerator());
}
for (let i = 0; i < 5; i++) {
  generators.push(new GemGenerator());
}
for (let i = 0; i < 20; i++) {
  generators.push(new SilverGenerator());
}
for (let i = 0; i < 3; i++) {
  generators.push(new DiamondGenerator());
}
for (let i = 0; i < 2; i++) {
  generators.push(new PlatinumGenerator());
}

for (let i = 0; i < 10; i++) {
  const index: number = Math.floor(Math.random() * 35);
  generators[index].openReward();
}
