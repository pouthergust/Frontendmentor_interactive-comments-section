const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'interactive-comments-section',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

