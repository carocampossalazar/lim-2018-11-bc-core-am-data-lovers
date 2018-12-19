const pokemonData = window.POKEMON.pokemon;

const pokemon = window.pokemon;
let showPokemonFilter = '';
for (let i = 0; i < 151; i++) {
  let imagen = pokemonData[i].img;
  let name = pokemonData[i].name;
  showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
    '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
    '<img src="' + imagen + '<h3>' + name + '</h3>' +
    '</div>' + '</article>';
}
document.getElementById('pokemon-list').innerHTML = showPokemonFilter;

const typePokemon = document.getElementById('pokemon-type');
typePokemon.addEventListener('change', () => {
  const typeData = 'type';
  const typePokemonValue = typePokemon.value;
  const arrListOfIdPokemonType = pokemon.filterData(typeData, typePokemonValue);
  let showPokemonFilter = '';
  for (let i = 0; i < arrListOfIdPokemonType.length; i++) {
    showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + arrListOfIdPokemonType[i].img + '<h3>' + arrListOfIdPokemonType[i].name + '</h3>' +
      '</div>' + '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonFilter;
});

const eggPokemon = document.getElementById('pokemon-egg');
eggPokemon.addEventListener('change', () => {
  const typeData = 'egg';
  const eggPokemonValue = eggPokemon.value;
  const arrPokemonEgg = pokemon.filterData(typeData, eggPokemonValue);
  let showPokemonFilter = '';
  for (let i = 0; i < arrPokemonEgg.length; i++) {
    showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + arrPokemonEgg[i].img + '<h3>' + arrPokemonEgg[i].name + '</h3>' +
      '</div>' + '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonFilter;
});

const orderPokemon = document.getElementById('pokemon-order');
orderPokemon.addEventListener('change', () => {
  const arrPokemon = pokemonData;
  const orderPokemonValue = orderPokemon.value;
  let order;
  switch (orderPokemonValue) {
  case 'number':
    order = 'asc';
    break;
  case 'name-one':
    order = 'asc';
    break;
  case 'name-two':
    order = 'desc';
    break;
  default:
  }

  const orderPokemonName = pokemon.sortData(arrPokemon, orderPokemonValue, order);
  let showPokemonOrder = '';
  for (let i = 0; i < orderPokemonName.length; i++) {
    showPokemonOrder += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + orderPokemonName[i].img + '<h3>' + orderPokemonName[i].name + '</h3>' +
      '</div>' + '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonOrder;
});
