import mongoose from "mongoose";
export const connect=async(urlDB:string):Promise<any>=>{
    try {
        await mongoose.connect(urlDB);
        console.log("Connect DB ok 👋");
    } catch (error) {
        console.log("Error de conexión a mongodb:" + error);
    }
}
