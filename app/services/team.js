import Service from '@ember/service';
import env from 'crud/config/environment';
import 'whatwg-fetch';

export default class TeamService extends Service {
    getTeam(characterId) {
        return window
            .fetch(`${env.apiUrl}/team/${characterId}`)
            .catch((e) => console.log(e));
    }

    changeTeam(characterId, slotId, newPokemonId) {
        return window
            .fetch(`${env.apiUrl}/team/${characterId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slotId, newPokemonId })
            })
            .catch((e) => console.log(e));
    }

}
