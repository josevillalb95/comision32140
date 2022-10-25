export default class Perimetro {
    constructor() {
    }
    private msj(operacion:string,valor:number):string{
      return `El perimetro del ${operacion} es ${valor}`;
      
    }
    rectangulo(): string {
      return this.msj('rectangulo',123)
    }
    circulo(): string {
      return this.msj('círculo',54)
    }
    cuadrado(): string {
      return this.msj('cuadrado',43)
    }
   }
   