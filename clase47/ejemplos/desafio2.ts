
import { serve, ServerRequest } from "https://deno.land/std@0.106.0/http/server.ts";
const port = Number(Deno.env.get("PORT")) || 8081;
const server = serve({ port });
function extraerFrase(req: ServerRequest) {
    const query = req.url.replace(/\//g, ""); // esto elimina las barras de la url!
    const params = new URLSearchParams(query); // esto devuelve un diccionario de pares 'clave:valor'
    let frase = params.get("frase");
    if (frase) {
      frase = decodeURIComponent(frase); // esto decodifica los caracteres especiales (escapados)
    }
    return frase ?? ""
  }
  
function handlerRequest(req:ServerRequest) {
    const frase = extraerFrase(req)
    const fraseReverse= frase.split(' ').reverse().join(" ")
    req.respond({
        status:200,
        body:fraseReverse
    })
}
for await (const req of server) {
    handlerRequest(req)
}
console.log(`conectado al puerto ${port}!`);
