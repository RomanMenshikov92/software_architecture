import { Employee, SalaryCalculator } from "../src/SRP/SRP";
import { SpeedCalculation, Car, Bus } from "../src/OCP/OCP";
import { Circle, Cube } from "../src/ISP/ISP";
import { Shape, Rectangle, Square } from "../src/LSP/LSP";
import { Car_auto, PetrolEngine, DieselEngine } from "../src/DIP/DIP";

// пример из SRP
const employee = new Employee("John Doe", new Date(), 50000);
const salaryCalculator = new SalaryCalculator(employee.calculateNetSalary());

console.log(employee.getEmpInfo());
console.log(salaryCalculator.calculateNetSalary());

// пример из OCP
const car = new Car(200, "Car");
const bus = new Bus(100, "Bus");

console.log(SpeedCalculation.calculateAllowedSpeed(car));
console.log(SpeedCalculation.calculateAllowedSpeed(bus));

// пример из ISP
const circle = new Circle(5);
const cube = new Cube(10);

console.log("Circle area:", circle.area());
console.log("Cube area:", cube.area());
console.log("Cube volume:", cube.volume());

// пример из LSP
const shape = new Shape();
shape.setWidth(5);
shape.setHeight(10);
console.log(shape.area());

const rectangle = new Rectangle();
rectangle.setWidth(5);
rectangle.setHeight(10);
console.log(rectangle.area());

const square = new Square();
square.setWidth(5);
console.log(square.area());

// пример из DIP
const petrolEngine = new PetrolEngine();
const dieselEngine = new DieselEngine();

const car1 = new Car_auto(petrolEngine);
car1.start();
const car2 = new Car_auto(dieselEngine);
car2.start();

console.log(car1.start());
console.log(car2.start());
