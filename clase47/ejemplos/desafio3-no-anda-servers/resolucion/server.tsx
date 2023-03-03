// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import {
  createApp,
  ServerRequest,
} from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();

app.handle("/", extraerFraseController);

async function extraerFraseController(req: ServerRequest) {
  const frase = extraerFrase(req);
  const invertida = frase.split(" ").reverse().join(" ");

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          {invertida}
        </body>
      </html>,
    ),
  });
}

function extraerFrase(req: ServerRequest) {
  const query = req.url.replace(/\//g, ""); // esto elimina las barras de la url!
  const params = new URLSearchParams(query); // esto devuelve un diccionario de pares 'clave:valor'
  let frase = params.get("frase");
  if (frase) {
    frase = decodeURIComponent(frase); // esto decodifica los caracteres especiales (escapados)
  }
  return frase ?? "";
}

app.listen({ port: 8080 });
