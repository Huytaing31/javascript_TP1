const jourActuel = "lundi";

let jourSuivant = "";

switch (jourActuel) {
  case "lundi" :
    jourSuivant = "mardi";
    break;
  case "mardi" :
    jourSuivant = "mercredi";
    break;
  case "mercredi" :
    jourSuivant = "jeudi";
    break;
  case "jeudi" :
    jourSuivant = "vendredi";
    break;
  case "vendredi" :
    jourSuivant = "samedi";
    break;
  case "samedi" :
    jourSuivant = "dimanche";
    break;
  case "dimanche" :
    jourSuivant = "lundi";
    break;
  default:
    console.log("Désolé, je n'ai pas compris");
    
}

if(jourSuivant){
  console.log(`Demain, nous serons ${jourSuivant}`);
}