let film = [
    {
        titre: "Deadpool",
        annee: 2016,
        realisateur: "Tim Miller"
    },
    {
        titre: "Spiderman",
        annee: 2002,
        realisateur: "Sam Raimi"
    },
    {
        titre: "Scream",
        annee: 1996,
        realisateur: "Wes Craven"
    },
    {
        titre: "It: Chapter 1",
        annee: 2019,
        realisateur: "Andy Muschietti"
    }
];
console.log(film);

let titre = document.getElementById("titre")
let annee = document.getElementById("annee")
let realisateur = document.getElementById("realisateur")


const button = document.getElementById("ajouter");//vérification des données de l'utilisateur

button.addEventListener("click", (e) => {
    e.preventDefault();

    if(titre.value.length < 2 ){
        alert("Le titre doit avoir au moins 2 caractères!");
        return false;
    }
    if(annee.value.length !== 4){
        alert("L'année doit contenir que 4 chiffres!");
        return false;
    }
    if(realisateur.value.length < 5 ){
        alert("Le réalisateur doit avoir minimum 5 caractères!");
        return false;
    }
        alert("Formulaire valide!");
});

// const choix = document.getElementById("choix"); 
const bouton = document.getElementById("sauvegarder");//si formulaire validé 

bouton.addEventListener("click", function(e) {
    e.preventDefault();
    
    if(
        titre.value.length >= 2 && 
        annee.value.length === 4 &&
        realisateur.value.length >= 5
    ){

    let nouveauFilm = {
        titre: titre.value,
        annee: annee.value,
        realisateur: realisateur.value
    };

    film.push(nouveauFilm) // Ajouter film dans le tableau
    setTimeout("Film ajouté avec succès!", 3000) //Afficher message d'alerte pendant 3s
    console.log(film);
    
    } else {
        setTimeout("Erreur dans le formulaire", 5000); //Afficher message d'alerte pendant 5s  
        console.log(film);
        
    }  
     
});