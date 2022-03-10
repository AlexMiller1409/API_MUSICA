function musica() {
    artista = document.getElementById('artista').value;
    console.log(artista)
    url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artista}`;
    fetchApi(url);
    console.log(artista)
}
function fetchApi(url) {
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let ano = (data.artists[0].intBornYear);
      let bio = (data.artists[0].strBiographyPT);
      let genero = (data.artists[0].strGenre);
      let lugar = (data.artists[0].strCountry);
      console.log(data.artists)
      console.log(bio)
      document.getElementById('nascimento').innerText = ano
      document.getElementById('lugar').innerText = lugar
      document.getElementById('genero').innerText = genero
      document.getElementById('biografia').innerText = bio
    })
    .catch((err) => {
      
    })
}