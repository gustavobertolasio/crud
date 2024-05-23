import Service from '@ember/service';
import env from 'crud/config/environment';
import 'whatwg-fetch';

export default class PokemonService extends Service {
    getPokemons() {
        return window
            .fetch(`${env.apiUrl}/pokemon`)
            .catch((e) => console.log(e));
    }
}
