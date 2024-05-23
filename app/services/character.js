import Service from '@ember/service';
import env from 'crud/config/environment';
import 'whatwg-fetch';

export default class CharacterService extends Service {
  characterExists(name) {
    return window
      .fetch(`${env.apiUrl}/character/${name}`)
      .catch((e) => console.log(e));
  }

  getCharacter(id) {
    return window
      .fetch(`${env.apiUrl}/character/stats/${id}`)
      .catch((e) => console.log(e));
  }

  createCharacter(character) {
    return window
      .fetch(`${env.apiUrl}/character`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
      })
      .catch((e) => console.log(e));
  }

  deactivateCharacter(characterId) {
    return window
      .fetch(`${env.apiUrl}/character/${characterId}`, {
        method: 'DELETE',
      })
      .catch((e) => console.log(e));
  }
}
