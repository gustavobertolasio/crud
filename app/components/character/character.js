import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class CharacterComponent extends Component {
  @tracked step = 0;
  @service character;
  @service router;
  form = {
    name: null,
    age: null,
  };

  callbackByStep = {
    0: () => this.character.characterExists(this.form.name),
    1: () => this.character.createCharacter(this.form),
  };

  get isFirstStep() {
    return this.step == 0;
  }

  get isSecondStep() {
    return this.step === 1;
  }

  get buttonText() {
    return this.step === 1 ? 'Finalizar' : 'Continuar';
  }

  nextStep = async () => {
    await this.callbackByStep[this.step]();

    this.step++;
  };
}
