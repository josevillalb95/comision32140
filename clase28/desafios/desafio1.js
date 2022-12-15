const args = process.argv.slice(2)

const nums=[]
let error=false
args.forEach(item => {
    // Number(item)
    //  '3' => 3
    // 'jose' => NaN
    if(isNaN(Number(item)))
        error=true
    else
        nums.push(Number(item))
});
// [2,5,6]
// totalNumeros= 3
const totalNumeros=nums.length   
// 0 ES LO MISMO QUE FALSE
if(!totalNumeros){
    return console.log({
        descripcion:'sin numeros'
    })
}

if(error){
    return console.log({
        descripcion:'error de tipo'
    })
}
// FLUJO REDUCE
// [1,2,3,5,6]
// 0+1 =1
// 1+2 = 3
// 3+3 = 6
// 6+5 = 11
// 11+6 =17
const promedio=nums.reduce( (p,c)=> p+c , 0)/totalNumeros
console.log({
    numeros:nums,
    promedio,
    max:Math.max(...nums),
    min:Math.min(...nums),
    ejecutable:process.title,
    pid:process.pid
})

// Math.max(4,5,6,8,1) => 8



// PROCESO PADRE PROMEDIO 17/5 = 3.5555
// PROC. HIJO 1 = SUMAR => 17
// PROC. HIJO 2 = CONTAR  => 5





