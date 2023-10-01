import { Angle3D } from '../Stuff/Angle3D';
import { Point3D } from '../Stuff/Point3D';

export class Camera {
  Location: Point3D;
  Angle: Angle3D;

  Rotate(angleAction: Angle3D): void {}

  Move(pointAction: Point3D): void {}
}
