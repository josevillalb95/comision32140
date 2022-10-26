import { figura } from "./Ifigura.interface";
import mensaje from "./Msj";
export default class Perimetro extends mensaje implements figura {
    constructor() {
      super()
    }
    rectangulo(): string {
      return super.msj('rectangulo',123)
    }
    circulo(): string {
      return super.msj('círculo',54)
    }
    cuadrado(): string {
      return super.msj('cuadrado',43)
    }
   }
   