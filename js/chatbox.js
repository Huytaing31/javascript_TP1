// Exo chatbot 
let prenom = prompt("Bonjour quel est ton prénom ?");
let humeur = prompt("Etes vous de bonne humeur ? ");

if (humeur === "non"){
  alert("prenez un café");
}
else {
  let javascript = prompt("voulez voulez faire du javascript ?");
  if(javascript === "non"){
    alert("Faites une pause");
  }
}
alert("javascript c'est super !");

