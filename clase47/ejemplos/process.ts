console.log(Deno.args)
console.log(Deno.env.get("PORT"))
console.log(Deno.env.toObject()['PORT'])
