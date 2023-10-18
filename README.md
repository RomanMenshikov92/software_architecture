# Архитектура ПО

## Урок 1. Введение в понятие архитектуры, проектирование ПО и жизненный цикл программного продукта. UML-диаграммы

- Задание 1. На основе Диаграмы классов ModelElements, разработать классы: Model Store, PoligonalModel (Texture, Poligon), Flash, Camera, Scene
- Задание 2. Ознакомиться с документацией в свободном формате, которая может пригодиться Вам для дальнейшей работы:
  ГОСТ Р ИСО/МЭК 12207-2010 Информационная технология (ИТ). Системная и программная инженерия. Процессы жизненного цикла программных средств.
  ISO/IEC/IEEE 29148:2018 Systems and software engineering — Life cycle processes — Requirements engineering
  Стандарты ЕСКД — единая система конструкторской документации
  ГОСТ 2.001-2013 ЕСКД. Общие положения
  Стандарты АСУ ГОСТ 34 — автоматизированные системы управления
  Стандарты ЕСПД ГОСТ 19 — единая система программной документации

## Урок 2. Объектно-ориентированные паттерны

- Задание 1. Закончить разработку паттерна Фабричный метод. Добавить в пример из семинара как минимум 5 наград.
- Задание 2. Познакомиться с другими типами паттернов (задание по желанию)

## Урок 3. Принципы SOLID

- Задание 1. (Обязательное) По разработанному коду нарисовать UML диаграмму. Сдаем в формате JPG. Онлайн ресурс редактор (https://online.visual-paradigm.com/)

- Задание 2. (Не обязательное) Формат сдачи: ссылка на гитхаб проект
  Базовое задние:
  1. Переписать код в соответствии с Single Responsibility Principle:
     public class Employee {
     private String name;
     private Date dob;
     private int baseSalary;
     public Employee(String name, Date dob, int baseSalary) {
     this.name = name;
     this.dob = dob;
     this.baseSalary = baseSalary;
     }
     public String getEmpInfo() {
     return "name - " + name + " , dob - " + dob.toString();
     }
     public int calculateNetSalary() {
     int tax = (int) (baseSalary \* 0.25);//calculate in otherway
     return baseSalary - tax;
     }
     }
     ​
     Подсказка: вынесите метод calculateNetSalary() в отдельный класс
     ​
  2. Переписать код SpeedCalculation в соответствии с Open-Closed Principle:
     public class SpeedCalculation {
     public double calculateAllowedSpeed(Vehicle vehicle) {
     if (vehicle.getType().equalsIgnoreCase("Car")) {
     return vehicle.getMaxSpeed() _ 0.8;
     } else if (vehicle.getType().equalsIgnoreCase("Bus")) {
     return vehicle.getMaxSpeed() _ 0.6;
     }
     ​
     return 0.0;
     }
     }
     public class Vehicle {
     int maxSpeed;
     String type;
     public Vehicle(int maxSpeed, String type) {
     this.maxSpeed = maxSpeed;
     this.type = type;
     }
     public int getMaxSpeed() {
     return this.maxSpeed;
     }
     public String getType() {
     return this.type;
     }
     }
     ​
     Подсказка: создайте два дополнительных класса Car и Bus(наследников Vehicle), напишите метод calculateAllowedSpeed(). Использование этого метода позволит сделать класс SpeedCalculation соответствующим OCP
     ​
  3. Переписать код в соответствии с Interface Segregation Principle:
     public interface Shape {
     double area();
     double volume();
     }
     public class Circle implements Shape {
     private double radius;
     public Circle(double radius) {
     this.radius = radius;
     }
     @Override
     public double area() {
     return 2 _ 3.14 _ radius;
     }
     @Override
     public double volume() {
     throw new UnsupportedOperationException();
     }
     }
     public class Cube implements Shape {
     private int edge;
     public Cube(int edge) {
     this.edge = edge;
     }
     @Override
     public double area() {
     return 6 _ edge _ edge;
     }
     @Override
     public double volume() {
     return edge _ edge _ edge;
     }
     }
     ​
     Подсказка: круг не объемная фигура и этому классу не нужен метод volume().
     ​
     Задачи со \*(подсказок нет!, это же сложные задания)
  4. Переписать код в соответствии с Liskov Substitution Principle:
     public class Rectangle {
     private int width;
     private int height;
     public void setWidth(int width) {
     this.width = width;
     }
     public void setHeight(int height) {
     this.height = height;
     }
     public int area() {
     return this.width \* this.height;
     }
     }
     public class Square extends Rectangle {
     @Override
     public void setWidth(int width) {
     super.width = width;
     super.height = width;
     }
     @Override
     public void setHeight(int height) {
     super.width = height;
     super.height = height;
     }
     }
     ​
  5. Переписать код в соответствии с Dependency Inversion Principle:
     public class Car {
     private PetrolEngine engine;
     public Car(PetrolEngine engine) {
     this.engine = engine;
     }
     public void start() {
     this.engine.start();
     }
     }
     public class PetrolEngine {
     public void start() {
     }
     }
     Разорвать зависимость классов Car и PetrolEngine. У машины же может быть DieselEngine.

## Урок 4. Компоненты. Принципы связности и сочетаемости компонентов

- Задание 1. Вы принимаете участие в проекте(приложение покупки билета на автобус). Вам доступен проект разработанный вашей командой. Осталась только ваша часть до релиза. Вам предстоит разработать по UML диаграмме классы домена приложения: User, BankAccount и Ticket.
Полностью разработанный проект должен собраться и выполниться. Общая UML диаграмма, проект и UML неразработанных классов приложена в материалах курса.

## Урок 5. Горизонтальные уровни и вертикальные срезы архитектуры

- Задание 1. Сформировать компоненты для любой системы из задания. Выпустить UML диаграмму классов (сдача в формате jpg файла на гите).
На выбор:
  - UML диаграмма структуры маркетплейса
  - UML диаграмма структуры Приложения контроля работы Пивзавода(смена, бухгалтерия и директор)
  (со звездочкой) Сделать реализацию на языке JAVA(python, c#, go, dart) по разработанной UML диаграмме.

