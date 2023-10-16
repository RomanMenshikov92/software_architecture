// Код в соответствии с Single Responsibility Principle
export class Employee {
  private name: string;
  private dob: Date;
  private baseSalary: number;
    calculateNetSalary: any;

  constructor(name: string, dob: Date, baseSalary: number) {
    this.name = name;
    this.dob = dob;
    this.baseSalary = baseSalary;
  }

  getEmpInfo(): string {
    return "name - " + this.name + " , dob - " + this.dob.toString();
  }
}

// метод calculateNetSalary() в отдельный класс
export class SalaryCalculator {
  private baseSalary: number;

  constructor(baseSalary: number) {
    this.baseSalary = baseSalary;
  }

  calculateNetSalary(): number {
    const tax = this.baseSalary * 0.25;
    return this.baseSalary - tax;
  }
}
