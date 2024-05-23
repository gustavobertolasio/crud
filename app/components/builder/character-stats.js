import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BuilderCharacterStatsComponent extends Component {
  @service character;
  @service router;
  @tracked characterStats = {};

  constructor() {
    super(...arguments);
    this.character.getCharacter(this.router.currentRoute.params.characterId).then(async res => {

      this.characterStats = await res.json();
    })
  }

  redirect = () => {
    this.router.transitionTo('character');
  }

  deactiveCharacter = () => {
    this.character.deactivateCharacter(this.characterStats.id).then(res => {
      if (res.status === 200) {
        this.router.transitionTo('index');
      }
    })
  }

}
