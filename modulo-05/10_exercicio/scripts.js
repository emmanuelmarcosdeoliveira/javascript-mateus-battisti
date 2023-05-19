const VELOCIDADE = 33;
if(VELOCIDADE <= 50){
  console.log('Diriga com segurança use o cinto!')
}else if(VELOCIDADE > 49 && VELOCIDADE < 80 ){
  console.log(`Sua velocidade é ${VELOCIDADE}KM/H voce ésta dentro da Velocidade Permitida!`)
}else{
  console.log(`Sua velocidade é ${VELOCIDADE} KM/H; voce está acima da velocidade Permitida!  `)
}
