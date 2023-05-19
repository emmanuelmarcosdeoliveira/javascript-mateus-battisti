let numeroDigitado = 40;
let divisor = 2;
while (numeroDigitado % divisor != 0) divisor++;

if (numeroDigitado == divisor) console.log("Número Primo!");
else console.log("Número NÃO primo!");
