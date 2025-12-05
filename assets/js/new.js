const key = "cf65b73b";

const btn = document.getElementById("button");
const resultatDiv = document.getElementById("resultat");


button.addEventListener("click", async () => {

    const film = document.getElementById("film").value;
    const episode = document.getElementById("episode").value;
    const serie = document.getElementById("serie").value;
    const saison = document.getElementById("saison").value;

    let url = `https://www.omdbapi.com/?apikey=${key}`;

    /*je peux pas mettre 2 &t sinon ça écrase le premier*/
    if (film) url += `&t=${film}`;
    if (serie) url += `&s=${serie}`;
    if (saison) url += `&Season=${saison}`;
    if (episode) url +=  `&Episode=${episode}`;

    resultatDiv.innerHTML = `<p>chargement...</p>`;

try {      
    const response = await fetch(url); 
    const data = await response.json();

    if (data.Response === "False") {
    resultatDiv.innerHTML = `<p class="text-danger text-center">${data.Error}</p>`;
    return;
    }
    if (data.Title) {
        resultatDiv.innerHTML = `
            <div class="col-4">
                <div class="card bg-dark text-white p-3 shadow">
                    <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://placehold.co/300x400'}" class="card-img-top">
                    <div class="card-body">
                            <h3>${data.Title}</h3>
                            <p><strong>Année :</strong> ${data.Year}</p>
                            <p><strong>Genre :</strong> ${data.Genre}</p>
                            <p><strong>Réalisateur :</strong> ${data.Director}</p>
                            <p><strong>Résumé :</strong> ${data.Plot}</p>
                        </div>
                    </div>
                </div>
            `;
            return;
        }
    } catch (err) {
        result.innerHTML = `<p class="text-danger">Erreur : ${err.message}</p>`;
    }
});
