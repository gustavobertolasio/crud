import Service from '@ember/service';
import 'whatwg-fetch';

export default class CharacterService extends Service {
  characterExists(name) {
    return window
      .fetch(`/character/${name}`)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }

  createCharacter(character) {
    return window
      .fetch(`/character/create`, {
        method: 'POST',
        body: JSON.stringify(character),
      })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }
}
