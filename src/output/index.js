/* eslint-disable global-require */
module.exports = {
  jsonCompactOutput: require('./json-compact'),
  jsonOutput: require('./json'),
  memoryOutput: require('./memory'),
  multiOutput: require('./multi'),
  sqliteOutput: require('./sqlite'),
};
