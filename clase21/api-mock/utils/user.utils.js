

const getRandom=(items)=>{
  let ramdom=Math.floor(Math.random()*items.length) -1 
  if(ramdom < 0)
  ramdom=0
  return items[ramdom ];

}
const getRandomName=()=>{
  const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
  return getRandom(nombres)
}

const getRandomLastName=()=>{
  const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
  return getRandom(apellidos)

}
const getRandomColorName=()=>{
  const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']
  return getRandom(colores)
}


const createFakeUser = () => {
  return {
    nombre:getRandomName(),
    apellido:getRandomLastName(),
    color:getRandomColorName()
  }
};
module.exports = {
  createFakeUser,
};
