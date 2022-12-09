const $filt = document.querySelector(".filt");
let pokemon = [];
//console.log($filt);
const $collapse = document.querySelector("#collapse");
const $table = document.querySelector("table");
const $modal = document.querySelector(".modal-container");

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
				"<tr> <td class = pokemon-link" +
				" " +
				"data-url=" +
				el.url +
				">" +
				el.name +
				"</td>" +
				"<td>" +
				el.url +
				"</td>" +
				"</tr>";
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

$table.addEventListener("click", function (event) {
	let url = event.target.dataset.url;
	if (url) {
		fetch(event.target.dataset.url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				let modal =
					"<h3 class =modal-tittle>" +
					data.name +
					"</h3>" +
					"<div class = front-default>" +
					"<img src = " +
					data.sprites.other.dream_world.front_default +
					">" +
					"</div>" +
					"<div class = foot-bar>" +
					"<img src = " +
					data.sprites.back_default +
					">" +
					"<img src = " +
					data.sprites.back_shiny +
					">" +
					"<img src = " +
					data.sprites.front_default +
					">" +
					"<img src = " +
					data.sprites.front_shiny +
					">" +
					"</div>";
				document.querySelector(".modal").innerHTML = modal;
				//console.log(data);
			});
		openModal(open);
	}
});
document.querySelector(".overlay").addEventListener("click", function () {
	openModal(close);
});
