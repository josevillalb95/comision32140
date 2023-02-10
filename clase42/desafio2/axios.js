import axios from "axios";
axios.defaults.baseURL='http://localhost:8080'
try{
    const res= await axios('/')
    console.log(res.data)
}
catch(e){
    console.log(e)
}