export default class Superficie {
    constructor() {
    }
    private msj(operacion:string,valor:number):string{
      return `La superficie del ${operacion} es ${valor}`;
      
    }
    rectangulo(): string {
      return this.msj('rectangulo',3212)
    }
    circulo(): string {
      return this.msj('círculo',433)
    }
    cuadrado(): string {
      return this.msj('cuadrado',544)
    }
   }