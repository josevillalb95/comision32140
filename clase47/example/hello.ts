import { parse } from "https://deno.land/std@0.178.0/datetime/mod.ts";
import {bgBlue,green,bold} from "https://deno.land/std@0.178.0/fmt/colors.ts";
const hello= ()=> 
    parse("04-07-1995",'dd-mm-yyyy')

console.log(hello())
console.log(bgBlue(green("holaa !")))