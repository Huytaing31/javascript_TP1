// Exo 1
// a = 2
// b = 10
// c = 102
// d = 30
// e = 40
// f = 2
// g = 2

// Exo : Permutation de variable 
let nombre1 = 5;
let nombre2 = 3;
let nombre3 = nombre1 ;

nombre1 = nombre2;
nombre2 = nombre3;

console.log(`nombre1 = ${nombre1}`);
console.log(`nombre2 = ${nombre2}`);

// Exo : Interaction avec l'utilisateur 
let prenom = prompt("Veuillez entre votre prenom :");
let anneeDeNaissance = prompt("Veuillez entre votre année de naissance :");
let age = 2020 - anneeDeNaissance;

document.write(`Bonjour ${prenom}, `);
document.write(`vous avez ${age} ans`);