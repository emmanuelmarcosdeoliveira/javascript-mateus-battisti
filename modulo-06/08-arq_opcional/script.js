function soma(a,b){

if(a === undefined || b === undefined )  {
console.log("Essa função precisa ter os 02 parametos")
  }else {
    return a + b
  }

}
console.log(soma(1));
console.log(soma(1,5));

function saudacao(nome, idade){
    if (idade === undefined) {
  console.log(`Olá ${nome}`);
  } else { 
console.log(`Olá ${nome} voce tem ${idade} anos de idade `);
  }
}
console.log(saudacao("Emmanuel"));
console.log(saudacao("Emmanuel", 44));

