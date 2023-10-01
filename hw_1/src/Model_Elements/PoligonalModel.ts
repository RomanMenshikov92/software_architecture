import { Texture } from '../Model_Elements/Texture';
import { Poligon } from '../Model_Elements/Poligon';
import { Point3D } from '../Stuff/Point3D';

export class PoligonalModel {
  Textures: Texture[];
  Poligons: Poligon[];

  constructor(textures: Texture[]) {
    this.Textures = textures;
    this.Poligons = [new Poligon(new Point3D())];
  }
}
