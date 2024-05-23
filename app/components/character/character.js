import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class CharacterComponent extends Component {
  @tracked step = 0;
  @service character;
  @service router;
  @tracked buttonDisabled = true;
  @tracked form = {
    name: '',
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

  checkValid = () => {
    switch (this.step) {
      case 0: this.buttonDisabled = this.form.name === '';
      case 1: this.buttonDisabled = this.form.age === '';
    }

  }

  nextStep = async () => {
    await this.callbackByStep[this.step]().then(async (res) => {
      if (res.status === 200) {
        const { id } = await res.json();
        this.router.transitionTo('builder', id);
      }
    });

    this.step++;
    this.buttonDisabled = true;
  };
}
