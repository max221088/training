const $filt = document.querySelector('.filter');
let pokemon = [];
//console.log($filt);

document.querySelector('.ring').addEventListener("click", function () {
	this.classList.toggle('active');
});

function namePokemon (list){
    let tableItems = '';
    list.forEach(function (el) {
        tableItems += "<tr> <td>"+el.name+"</td><td>"+el.url+"</td></tr>";
    });
    document.querySelector('tbody').insertAdjacentHTML('beforeend', tableItems);
};

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
   return response.json()
})
.then(function (data){
	pokemon = data.results;
    namePokemon(pokemon);
	console.log(pokemon);
});

$filt.addEventListener('input', function (){
	let query = this.value.toLowerCase();
	let filtPokemon = pokemon.filter(function(el){
		if (el.name.toLowerCase().indexOf(query) != -1) {
			return true;
		} else {
			return false;
		};
	});
	console.log(filtPokemon);
	namePokemon(filtPokemon);
});
