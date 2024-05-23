import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BuilderPokemonSelectorComponent extends Component {
  @service router;
  @service team;
  @service pokemon;

  @tracked pokemonList = [
  ];
  @tracked teamSlots = [
  ];

  constructor() {
    super(...arguments);

    this.pokemon.getPokemons().then(async res => {
      this.pokemonList = await res.json();
    });

    this.getTeam();
  }

  getTeam() {
    this.team.getTeam(this.router.currentRoute.params.characterId).then(async res => {
      this.teamSlots = await res.json();
    })
  }

  selectedOption = ({ value: newPokemonId, name: slotId }) => {
    this.team.changeTeam(this.router.currentRoute.params.characterId, slotId, newPokemonId).then(res => {

      this.getTeam()
    }
    );
  };
}
