const sumar = require("../index");
const asserts = require("asserts");
//Asserts = Afirmacion
// 50% test una afirmacion que sea verdadera y una que es falsa

describe("Probar la suma de dos números",()=>{
  //afirmamos que cinco mas cinco son 10
it("Cinco mas cinco son 10",()=>{
  asserts.equal(10,sumar(5,5));
})

  //afirmamos que cinco mas siete no son 10
it("Cinco mas siete no son 10",()=>{
    asserts.notequal(10,sumar(5,7));
})
});
