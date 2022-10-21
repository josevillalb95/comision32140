class ColorClass {
    constructor(){}
    private randomColor = (): number => Math.floor(Math.random() * 255);
    public generateColor = ():string =>{
		return `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`;
    } 
}
console.log(new ColorClass().generateColor())


// // // EJEMPLO JS 
// let montoFactura=233
// const gastosExtras=()=>"400"
// console.log("voy a factura ",montoFactura+gastosExtras())


// // EJEMPLO ts 
// let montoFactura=233
// const gastosExtras=():string=>"400"
// const GenerateMontoFactura=(monto:number,extra:number):number=> monto+extra
// console.log("voy a factura ",GenerateMontoFactura(montoFactura,gastosExtras()))
