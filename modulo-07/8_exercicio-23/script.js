function quantidadeDeCaractertes(caracteres){
   if(caracteres.length > 10){
console.log("Texto Muito Longo")
  }else 
  console.log("Texto dentro do Parametro")
} 
quantidadeDeCaractertes("Emmanuel");
quantidadeDeCaractertes("Emmanuel Marcos");

// Outro Exemplo!!

function checarTamanhoTexto(texto){
  if(texto.length > 10){
    console.log("Texto Muito Longo")
  }else {
    console.log("Texto dentro do limite")
  } 
  console.log(texto.length)
}
checarTamanhoTexto("Emmanuel");
checarTamanhoTexto("Emmanuel Marcos");