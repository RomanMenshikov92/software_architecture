import { Start } from "../src/ClientApplication/Start";
import { CashRepository } from "../src/Services/CashRepository";

const main = () => {
  const start = new Start();
  start.runLoginRegisterMenu();
};

main();