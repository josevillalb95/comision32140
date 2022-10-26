import { figura } from "./Ifigura.interface";
import mensaje from "./Msj";
export default class Superficie extends mensaje implements figura{ 
    constructor() {
      super()
    }
  
    rectangulo(): string {
      return super.msj('rectangulo',3212)
    }
    circulo(): string {
      return super.msj('círculo',433)
    }
    cuadrado(): string {
      return super.msj('cuadrado',544)
    }
   }