import EmberRouter from '@ember/routing/router';
import config from 'crud/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('builder', { path: '/:characterId/montar-time' });
  this.route('character', { path: '/criar-personagem' });
});
