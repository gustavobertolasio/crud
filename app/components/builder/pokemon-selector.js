import Component from '@glimmer/component';

export default class BuilderPokemonSelectorComponent extends Component {
  pokemonList = [
    { name: 'Bulbasaur', id: 1 },
    { name: 'Ivysaur', id: 2 },
    { name: 'Venusaur', id: 3 },
    { name: 'Charmander', id: 4 },
    { name: 'Charmeleon', id: 5 },
    { name: 'Charizard', id: 6 },
    { name: 'Squirtle', id: 7 },
    { name: 'Wartortle', id: 8 },
    { name: 'Blastoise', id: 9 },
    { name: 'Caterpie', id: 10 },
  ];

  teamSlots = [{}, {}, {}, {}, {}, {}];

  selectedOption = (a) => {
    console.log(a);
  };
}