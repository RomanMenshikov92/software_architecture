// код в соответствии с Interface Segregation Principle
export interface AreaCalculable {
  area(): number;
}

export interface VolumeCalculable {
  volume(): number;
}

export class Circle implements AreaCalculable {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Cube implements AreaCalculable, VolumeCalculable {
  private edge: number;

  constructor(edge: number) {
    this.edge = edge;
  }

  area(): number {
    return 6 * this.edge * this.edge;
  }

  volume(): number {
    return this.edge * this.edge * this.edge;
  }
}
