'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-truth-helpers': {},
    'ember-composable-helpers': {},
    'ember-set-helper': {},
  });

  return app.toTree();
};
