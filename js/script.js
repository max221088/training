const collapse = document.querySelector('#collapse');
console.log(collapse);
document.querySelector('.ring').addEventListener("click", function () {
	this.classList.toggle('active');
});

function namePokemon (list){
    let tableItems = '';
    list.results.forEach(function (el) {
        tableItems += "<tr> <td>"+el.name+"</td><td>"+el.url+"</td></tr>";
    });
    document.querySelector('tbody').insertAdjacentHTML('beforeend', tableItems)
};

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
   return response.json()
})
.then(function (data){
    namePokemon(data)
});

collapse.addEventListener('click' , function(){
	document.querySelectorAll('.menu-text').forEach(function(el){
		el.classList.toggle('hidden')
	});
	document.querySelector('.header').classList.toggle('wrap');
	document.querySelector('.wrapper').classList.toggle('wrap');
	document.querySelector('.brand').classList.toggle('hidden');
	document.querySelector('.logo-brand').classList.toggle('active');
	document.querySelector('.menu').classList.toggle('minimize');
});