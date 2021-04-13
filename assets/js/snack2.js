/* se numero inserito %2 == 0 
    allora stampo il numero inserito
    altrimenti 
      numero inserito ++
*/

do{
  var numeroUtente = parseInt(prompt("inserisci un numero"));
  
  if(numeroUtente % 2 === 0){
    console.log("il numero inserito è pari :"+numeroUtente);
  }else{
    console.log("il tuo numero è :"+numeroUtente+" ma adesso diventa :"+(numeroUtente+1));
  }

    var sceltaRigioca = prompt("inserisci si se vuoi giocare ancora e no se non vuoi giocare più");

}while(sceltaRigioca === "si" || sceltaRigioca === "Si" || sceltaRigioca === "SI" || sceltaRigioca === "sI");