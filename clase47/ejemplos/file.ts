const text=await Deno.readTextFile('ejmp.txt')
Deno.writeTextFile('ejmp.txt',`${text} x2`)