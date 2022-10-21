"use strict";
console.log("holaa mundoo ");
class AfterClass {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    suma() {
        return this.valor1 + this.valor2;
    }
    logSuma() {
        return `La suma es ${this.suma()}`;
    }
}
const instanciasAfter = new AfterClass(3, 4);
console.log(instanciasAfter.logSuma());
class auto {
    constructor(ruedas, asientos) {
        this.ruedas = 0;
        this.asientos = 0;
    }
    andar() {
        return "anda a mas de 40km/h ";
    }
}
class Bici {
    constructor(ruedas, asientos) {
        this.ruedas = 0;
        this.asientos = 0;
    }
    andar() {
        return "anda menos de 30km/h ";
    }
}
const instanciasBici = new Bici(2, 1);
console.log(instanciasBici.andar());
