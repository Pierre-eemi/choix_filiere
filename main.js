let dev = document.getElementById("dev");
let design = document.getElementById("design");
let marketing = document.getElementById("marketing");
let filiere = '';

dev.addEventListener('click', function(){
    document.querySelector('.popup').classList.add("show");
    document.querySelector('.show').style.backgroundColor = "#AE1622";
    filiere = 'Développement';
});

design.addEventListener('click', function(){
    document.querySelector('.popup').classList.add("show");
    document.querySelector('.show').style.backgroundColor = "#045687";
    filiere = 'Design';
});

market.addEventListener('click', function(){
    document.querySelector(".popup").classList.add("show");
    document.querySelector('.show').style.backgroundColor = "#ED9914"; 
    filiere = 'Marketing';
});

let form = document.querySelector('.form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let civilite = document.getElementById("civilite").value;
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("mail").value;
    let tel = document.getElementById("phone").value;
  
    let retour = document.getElementById("retour");
  
    let text = civilite+' '+ nom+' '+' '+prenom+' nous avons bien pris en compte votre demande pour la spécialité '+filiere+', vous recevrez une réponse sur l\’adresse '+email+'. Merci de votre confiance.';
    let info = document.createTextNode(text);
  
    retour.appendChild(info);
  
    document.querySelector('.popup').style.visibility='hidden';

  })