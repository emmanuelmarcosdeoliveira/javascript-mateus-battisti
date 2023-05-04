console.log(typeof("123" +  4));
console.log(typeof ("30" - 20));
// Professor entendi que ao fazer "123" + 4 ele concatena e retorna uma string mas pq o retorno de "30" - 20 é realizado o calculo? Não era para retornar algo como Nan?

// opa Levi, é que no + há uma semelhança (ambiguidade) entre os parâmetros de concatenação e soma, dando prioridade a concatenação.

// E na subtração não temos uma operação para strings, então ele converte a string para número.

// Mas assim, no mundo real você sempre vai assegurar o tipo de dado que está trabalhando para justamente evitar estes problemas...

console.log("Marcos" * 3);
console.log(typeof ("Marcos" * 3));
console.log();
console.log();
console.log();
console.log();
console.log();