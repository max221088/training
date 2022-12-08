const $filt = document.querySelector(".filt");
let pokemon = [];
//console.log($filt);
const $collapse = document.querySelector("#collapse");
const $table = document.querySelector("table");
const $modal = document.querySelector(".modal-container");
console.log(document.querySelector(".overlay"));

document.querySelector(".ring").addEventListener("click", function () {
	this.classList.toggle("active");
});

function openModal(data) {
	if (data == open) {
		$modal.classList.add("active");
	} else if (data == close) {
		$modal.classList.remove("active");
	}
}

function namePokemon(list) {
	let tableItems = "";
	if (list.length != 0) {
		list.forEach(function (el) {
			tableItems +=
				"<tr> <td>" + el.name + "</td><td>" + el.url + "</td></tr>";
		});
	} else {
		tableItems = "<tr><td>Not Font</td><td>Not Font</td></tr>";
	}
	document.querySelector("tbody").innerHTML = tableItems;
}

fetch("https://pokeapi.co/api/v2/pokemon/")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		pokemon = data.results;
		namePokemon(pokemon);
	});

$filt.addEventListener("input", function () {
	let query = this.value.toLowerCase();
	let filtPokemon = pokemon.filter(function (el) {
		if (el.name.toLowerCase().indexOf(query) != -1) {
			return true;
		} else {
			return false;
		}
	});
	namePokemon(filtPokemon);
});

$collapse.addEventListener("click", function () {
	document.querySelectorAll(".menu-text").forEach(function (el) {
		el.classList.toggle("hidden");
	});
	document.querySelector(".header").classList.toggle("wrap");
	document.querySelector(".wrapper").classList.toggle("wrap");
	document.querySelector(".brand").classList.toggle("hidden");
	document.querySelector(".logo-brand").classList.toggle("active");
	document.querySelector(".menu").classList.toggle("minimize");
});

$table.addEventListener("click", function () {
	openModal(open);
});
document.querySelector(".overlay").addEventListener("click", function () {
	openModal(close);
});
