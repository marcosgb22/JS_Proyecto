
function traerDatos(done) {

const results = fetch("https://rickandmortyapi.com/api/character");

results
    .then(response => response.json())
    .then(data => {
        done(data)
    });

}


traerDatos(data => {
    console.log(data);


});