import { Pickup } from "../src/Classes/Pickup";
import { TypeOfBody } from "../src/Enumerators/TypeOfBody";
import { TypeOfGearBox } from "../src/Enumerators/TypeOfGearBox";
import { TypeOfFuel } from "../src/Enumerators/TypeOfFuel";

// Создаем экземпляр класса Pickup
const pickup = new Pickup("Toyota", "Hilux", "Black", 4, TypeOfGearBox.MVT, TypeOfFuel.GAZ, 3000, 1000);

// Используем методы и получаем значения свойств
pickup.movement();
pickup.maintenance();
pickup.turnLight();
pickup.turnWipers();

// Проверяем в консоли
console.log(pickup.getMake());
console.log(pickup.getModel());
console.log(pickup.getColor());
console.log(pickup.getTypeOfBody());
console.log(pickup.getNumOfWheels());
console.log(pickup.getTypeOfGearBox());
console.log(pickup.getTypeOfFuel());
console.log(pickup.getEngineCapacity());

// Устанавливаем новые значения свойств
pickup.setMake("Nissan");
pickup.setModel("Navara");
pickup.setColor("White");
pickup.setTypeOfBody(TypeOfBody.PICKUP);
pickup.setNumOfWheels(4);
pickup.setTypeOfGearBox(TypeOfGearBox.AVT);
pickup.setTypeOfFuel(TypeOfFuel.DIZEL);
pickup.setEngineCapacity(2500);

console.log(pickup.getMake());
console.log(pickup.getModel());
console.log(pickup.getColor());
console.log(pickup.getTypeOfBody());
console.log(pickup.getNumOfWheels());
console.log(pickup.getTypeOfGearBox());
console.log(pickup.getTypeOfFuel());
console.log(pickup.getEngineCapacity());

// Вызываем методы интерфейсов
pickup.fuel();
pickup.wipWindShilde();
pickup.wipHeadLights();
pickup.wipMirrows();