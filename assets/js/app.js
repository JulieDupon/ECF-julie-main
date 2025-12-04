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
// console.log(film);

let titre = document.getElementById("title");
let annee = document.getElementById("year");
let realisateur = document.getElementById("author");
let button = document.getElementById("sauvegarder");
let tbody = document.querySelector("#film tbody");

// const button = document.getElementById("ajouter");//vérification des données de l'utilisateur

button.addEventListener("click", function(e) {
    e.preventDefault();

let anneeActuelle = new Date().getFullYear();
let anneeValeur = parseInt(annee.value);

    if(titre.value.length < 2){
        alert("Le titre doit avoir au moins 2 caractères!");
        return;
    }
    if (isNaN(anneeValeur) || anneeValeur < 1900 || anneeValeur > anneeActuelle){
        alert(`L'année doit être entre 1900 et l'année actuelle!`);
        return;
    }
    // if(annee.value.length !== 4){
    //     alert("L'année doit contenir que 4 chiffres!");
    //     return;
    // }
    if(realisateur.value.length < 5){
        alert("Le réalisateur doit avoir minimum 5 caractères!");
        return;
    }

    let nouveauFilm = {
        titre: titre.value,
        annee: annee.value,
        realisateur: realisateur.value
};

// });

// const choix = document.getElementById("choix"); 
// const bouton = document.getElementById("sauvegarder");//si formulaire validé 

// bouton.addEventListener("click", function(e) {
//     e.preventDefault();
    
//     if(
//         titre.value.length >= 2 && 
//         annee.value.length === 4 &&
//         realisateur.value.length >= 5
//     ){

    film.push(nouveauFilm);  // Ajouter film dans le tableau

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${nouveauFilm.titre}</td>
        <td>${nouveauFilm.annee}</td>
        <td>${nouveauFilm.realisateur}</td>
        <td><button class="btn btn-danger">supprimer</button></td>
`;
tbody.appendChild(tr);

alert("Film ajouté avec succès!");
console.log(film);

//pour vider les input
titre.value = "";
annee.value = "";
realisateur.value = "";

});

tbody.addEventListener("click", function(e){
    if(e.target && e.target.tagName === "BUTTON" && e.target.textContent === "supprimer"){
        e.target.closest("tr").remove();
    }
});



    // setTimeout("Film ajouté avec succès!", 3000) //Afficher message d'alerte pendant 3s
    // console.log(film);
    
    // } else {
    //     setTimeout("Erreur dans le formulaire", 5000); //Afficher message d'alerte pendant 5s  
    //     console.log(film);
        
    // } 
    <button onclick="window.location.href='new.html';">ajouter</button>    