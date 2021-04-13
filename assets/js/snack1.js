
/* versione con il for */
var numeroUtente;
var somma = 0;
var r;
for(var i=0; i<5; i++){

  numeroUtente = prompt("inserisci il "+(i+1)+" della lista di 5 numeri");
  r = parseInt(numeroUtente);
  console.log(r);

  somma += r;
}

console.log(somma);

/* versione con il while */
var numeroUtente1;
var counter = 0;
var somma1 = 0;
var f ;
while(counter<5){

  numeroUtente1 = prompt("inserisci il "+(counter+1)+" della lista di 5 numeri");
  f = parseInt(numeroUtente1);
  console.log(f);
  somma1 += f;
  counter++;
}

console.log(somma1);