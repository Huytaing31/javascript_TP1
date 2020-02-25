let nbGauche = 12;
let nbDroite = 6;
let operation = "+";
let resulat;

switch (operation){
  case "-" :
    resulat = nbGauche - nbDroite;
    break;
  case "+" :
    resulat = nbGauche + nbDroite;
    break;
  case "*" :
    resulat = nbGauche * nbDroite;
    break;
  case "/" :
    resulat = nbGauche / nbDroite;
    break;
  default :
    console.log("désolé , je n'ai pas compris !");
    
}
console.log(`le resutat de l'opération ${operation} est ${resulat}`)