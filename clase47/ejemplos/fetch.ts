const response = await fetch("https://jsonplaceholder.typicode.com/photos/33")
const json =await response.json()
console.log(json)