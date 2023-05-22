let x = 10; // Escopo Global
if(x > 5 ){
  let x = 20;
  x++;
  console.log(x) // ESCOPO DENTRO DO IF 
}

console.log(x); // Escopo Global