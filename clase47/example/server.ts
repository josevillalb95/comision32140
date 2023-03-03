import { serve } from "https://deno.land/std@0.106.0/http/mod.ts";
const port = Number(Deno.env.get("PORT")) || 8080;
const server = serve({ port });
for await (const req of server) {
    server.respond({ body: JSON.stringify({ msg: "hola mundo desde deno!" }) });
}
console.log(`conectado al puerto ${port}!`);
