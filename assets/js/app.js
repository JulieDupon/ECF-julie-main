let film = [
    {
        title: "La ligne verte",
        years: 2000,
        authors: "Franck Darabont"
    },
    {
        title: "Le Roi Lion",
        years: 1994,
        authors: "Roger Allers et Rob Minkoff"
    },
    {
        title: "Gladiator",
        years: 2000,
        authors: "Ridley Scott"
    },
    {
        title: "Avatar",
        years: 2009,
        authors: "James Cameron"
    }
];
console.log(film);

let titre = document.getElementById("titre")
let annee = document.getElementById("annee")
let realisateur = document.getElementById("realisateur")


const button = document.getElementById("ajouter");//vérification des données de l'utilisateur
button.addEventListener("click", () => {
    if(titre.lengt < 2 ){
        alert("Le titre doit avoir au moins 2 caractères!");
        preventDefault();
        return false;
    }
    if(annee.length < 4){
        alert("L'année doit contenir que 4 chiffres!");
        preventDefault();
        return false;
    }
    if(realisateur.length < 5 ){
        alert("Le réalisateur doit avoir minimum 5 caractères!");
    }
        alert("Formulaire valide!");
});

const choix = document.getElementById("choix"); 
const bouton = document.getElementById("sauvegarder");//si formulaire validé 
bouton.addEventListener("click", () => {
    if((titre.length === true) && (annee.length === true) && (realisateur.length === true)) {
        preventDefault();
    } 
    // choix.addEventListener("click", () => {}  
    if({
        choix = { //j'essaye de rentrer un nouveau film
        titre.document.getElementById("titre").value
        annee.document.getElementById("annee").value
        realisateur.document.getElementById("realisateur").value}
    });
    film.push("nouveauFilm")
    alert("film ajouté avec succès!")
})