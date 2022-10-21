console.log("holaa mundoo ")



class AfterClass {
    constructor(private valor1:number,private valor2:number){ }
    private suma():number{
        return this.valor1+this.valor2
    }
    logSuma():string{
        return `La suma es ${this.suma()}`
    }
}

const instanciasAfter=new AfterClass(3,4)
console.log( instanciasAfter.logSuma() )


interface IVehiculo {
    ruedas:number
    asientos:number
    andar():string
}

class Conductor {
    constructor( private nombre:string, private licencia:boolean){}
    private estadoLicencia():string{
        if(this.licencia)
            return "tengo liciencia"
        return "ni tengo liciencia"
    }
    public identidad():string{
        return `Me llamo ${this.nombre} y ${ this.estadoLicencia()}`
    }
}


class Auto extends Conductor implements IVehiculo {
    public ruedas=0
    public asientos=0
    constructor(  ruedas:number,  asientos:number, nombre:string, licencia:boolean){
        super(nombre,licencia)
    }
    
    andar():string{
        return "anda a mas de 40km/h "
    }
}


class Bici extends Conductor  implements IVehiculo {
    public ruedas=0
    public asientos=0
    constructor(  ruedas:number,  asientos:number, nombre:string, licencia:boolean){
        super(nombre,licencia)
    }
    andar():string{
        return "anda menos de 30km/h "
    }
    identidad():string{
        return super.identidad() + ", pero no hace falta "
    }
}


const instanciasBici=new Bici(2,1,"sebastian",false)
console.log( instanciasBici.andar() )
console.log( instanciasBici.identidad() ) 


const instanciasAuto=new Auto(2,1,"jose",true)
console.log( instanciasAuto.identidad() ) 