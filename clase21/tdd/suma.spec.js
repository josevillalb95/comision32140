const {suma} = require("./operaciones")
describe("suma",()=>{
    test(" 1+2 return 3 ",()=>{
        expect( suma(1,2) ).toBe(3) 
    })
})

