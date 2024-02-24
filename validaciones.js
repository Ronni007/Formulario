const ficha = document.getElementById("ficha");




const validar = function () {
  //solo letras

  let campo = ficha.value
  let texto = "cod_123"
  let ExpRegSoloLetras = /^[a-zA-z]{3}_[0-9]{3}$/;
  // let SoloLetrasValido = /ABCDáéíó/;  //Cadenade Solo Letras Valida

  //Evaluación de Cadena Valida de Solo Letras 
  if (ExpRegSoloLetras.test(campo)) {
    alert("Letras Válido");
  }


  //Evaluación de Cadena Invalida de Solo Letras     
  else {
    alert("No valido en número")
  }

}



ficha.addEventListener("blur", () => {
  validar(ficha)
});
// let campo = "Ronald"
// let exp = "^[a-zA-Z]+$";
// console.log(exp.test(campo))
