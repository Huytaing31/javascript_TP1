let random = Math.floor(Math.random()*99 + 1);
console.log(random);
let essaie = 10;
let nombre = prompt(`Entrez un nombre entre 1 et 100 : il vous reste ${essaie} essai(s) `);

for(let i = 0 ; i < 9; i++){
  if(nombre > random ){
    essaie--;
    console.log("Trop grand !");
    nombre = prompt(`Entrez un nombre entre 1 et 100 : il vous reste ${essaie} essai(s) `);
  }else if (nombre < random){
    essaie--;
    console.log("Trop petit !");
    nombre = prompt(`Entrez un nombre entre 1 et 100 : il vous reste ${essaie} essai(s) `);
  }else {
    console.log(`Bravo vous avez trouvé !`);
    break;
  }
}

if(essaie == 1){
  console.log(`Perdu ! le nombre était ${random}`);
}