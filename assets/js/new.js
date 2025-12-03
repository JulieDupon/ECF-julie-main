let film = document.querySelector('#film');
let episode = document.querySelector('#episode');
let serie = document.querySelector('#serie');
let saison = document.querySelector('#saison');
let button = document.querySelector('#button');

const key = cf65b73b


button.addEventListener('click', function(){
    film = film.value;
    episode = episode.value;
    serie = serie.value
    saison = saison.value

    const f = fetch(`http://www.omdbapi.com/?=${film}&${episode}&${serie}&${saison}&apikey=${cf65b73b}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {
        if (data.response === "true"){
            console.log(`film : ${data.film}`);
            console.log(`episode : ${data.episode}`);
            console.log(`serie : ${data.serie}`);
            console.log(`saison : ${data.saison}`);
        }
    })
})
 
    .catch(error => console.error("erreur :", error));
