import { MongoClient,config } from "../deps.ts";
import {IProduct} from '../types/products.ts'
const {MONGO_URI} = config()
const client = new MongoClient();
await client.connect(MONGO_URI);
const db = client.database("productos");
export const productDB=  db.collection<IProduct>("productos");