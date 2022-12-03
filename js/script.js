const $filt = document.querySelector('.filt');
let pokemon = [];
//console.log($filt);

document.querySelector('.ring').addEventListener("click", function () {
	this.classList.toggle('active');
});

function namePokemon (list){
    let tableItems = '';
	if (list.length != 0) {
		list.forEach(function (el) {
			tableItems += "<tr> <td>"+el.name+"</td><td>"+el.url+"</td></tr>"});
	} else { 
		tableItems = "<tr><td>Not Font</td><td>Not Font</td></tr>"
	}
	document.querySelector('tbody').innerHTML = tableItems
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
	})
	namePokemon(filtPokemon);
});
