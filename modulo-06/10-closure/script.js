// // function lembrarSoma(x) {
// //   return function(y){
// //     return  x + y ;

// //   }
// // }
// // // nessa expresão o valor de x é atribuido a (2) e o valor de y é atribuido a (5)  
// // let soma1 = lembrarSoma(2);
// // console.log(soma1(5));

// let soma2 = lembrarSoma(5);
// console.log(soma2(7))


// -------------------------------------------------------------------------//
function contador(i){
  let cont = i ;
  let somarContador = function(){
    console.log(cont)
    cont++
  }
  return somarContador;
} 

let mueContador = contador(5);
mueContador();
mueContador();
mueContador();
mueContador();


// a Closure se lembra do escopo lesto da função