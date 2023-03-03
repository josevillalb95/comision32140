// import { Server } from "https://deno.land/std@0.178.0/http/server.ts";
// const port = 4505;
// const handler = (request: Request) => {
//   const body = `hola mundo `;
//   return new Response(body, { status: 200 });
// };
// const server = new Server({ port, handler });
// console.log("server listening on http://localhost:4505");
// await server.listenAndServe();


import { serve } from "https://deno.land/std@0.106.0/http/mod.ts";
const port = Number(Deno.env.get("PORT")) || 8080;
const server = serve({ port });
for await (const req of server) {
  req.respond({ body: JSON.stringify({ msg: "hola mundo desde deno!" }) });
}
console.log(`conectado al puerto ${port}!`);
