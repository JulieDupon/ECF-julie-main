let film = document.querySelector('#film');
let episode = document.querySelector('#episode');
let serie = document.querySelector('#serie');
let saison = document.querySelector('#saison');
let button = document.querySelector('#button');
let resultatDiv = document.querySelector('#resultat');

const key = "cf65b73b";


button.addEventListener('click', function() {

    const filmValue = film.value.trim(); //je rajoute le .trim pour eviter les espaces inutiles
    const episodeValue = episode.value.trim();
    const serieValue = serie.value.trim();
    const saisonValue = saison.value.trim();

    let url = `https://www.omdbapi.com/?apikey=cf65b73b&t=${encodeURIComponent(film)}=${episode}=${serie}=${saison}`; //pour les valeurs de paramamètres caractères spéciaux

    /*je peux pas mettre 2 &t sinon ça écrase le premier*/
    if (filmValue) url += `http://www.omdbapi.com/?apikey=cf65b73b&t=${filmValue.trim()}`; 
    if (serieValue) url += `http://www.omdbapi.com/?apikey=cf65b73b&t=${serieValue.trim()}`;
    if (saisonValue) url += `http://www.omdbapi.com/?apikey=cf65b73b&Season=${saisonValue.trim()}`;
    if (episodeValue) url += `http://www.omdbapi.com/?apikey=cf65b73b&Episode=${episodeValue.trim()}`;

    fetch('http://www.omdbapi.com/?t=deadpool&apikey=cf65b73b')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));   

        if (data.Response === "True") {
            data.Search.forEach
        }           
//         const card = ` 
//             <div class="col-12 col-md-6 col-lg-4 mb-4">
//                 <div class="card">
//                     <img src="${poster}" class="card-img-top" alt="${item.title}">
//                     <div class="card-body">
//                     <h5 class="card-title">${item.title}</h5>
//                     <p class="card-text">Année : ${item.year}</p>
//                     <p class="card-text">Type : ${item.author}</p>
//                     </div>
//                 </div>
//             </div> 
//             `;  
//             resultatDiv.innerHTML += card;  
//             });
//             console.log("Titre :", data.Title); 
//             console.log("Année :", data.Year);
//             console.log("Type :", data.Type);
//         } else {
//             console.log("Erreur");
//         }
//     )
//     .catch(error => console.log(error));
// Array.IndexOf(Search.start)
});