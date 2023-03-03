import {parse} from "https://deno.land/std@0.178.0/datetime/mod.ts";
import { bgBlue, green, bold} from "https://deno.land/std@0.178.0/fmt/colors.ts";
const nacimientoProfe= parse('04-07-1995','dd-mm-yyyy')
const hello=(msj) => `Hola, ${msj}`
console.log(hello("comision 32140"))
console.log(bgBlue(green(bold("el profe nacio el: "+nacimientoProfe))))