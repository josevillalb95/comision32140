const store=[]

const guardar=(dato)=>{
    store.push(dato)
}

const listar=()=>{
    return store
}


export { 
    guardar,
    listar
}