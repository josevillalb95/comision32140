export const orderArray = (array:any[],keyOrdenacion:string)=>{
    return array.sort( (a:any,b:any)=>{
        return a[keyOrdenacion] - b[keyOrdenacion]
      })
}