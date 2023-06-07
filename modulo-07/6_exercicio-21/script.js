function verificarTipodeDado(dado) {
  if (typeof dado === "string") {
    console.log("Este dado é uma string");
  } else if (typeof dado === "number") {
    console.log("Este dado é um numero");
  } else if ( typeof dado === "boolean") {
    console.log("Este dado é um Boolean");
  }
}
verificarTipodeDado(true);
verificarTipodeDado(23);
verificarTipodeDado("Emmanuel");

