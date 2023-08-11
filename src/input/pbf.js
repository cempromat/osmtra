const debug = require('debug')('osm-search-data-export');
const fs = require('fs');
const parseOSM = require('osm-pbf-parser');
const through = require('through2');

const iterateItems = (onItem) => through.obj((chunk, enc, callback) => {
  chunk.forEach(onItem);
  callback();
});

function pbfInput({ inPath }) {
  return function input({ onItem, onComplete }) {
    if (!fs.existsSync(inPath)) {
      throw new Error('Invalid PBF input filename');
    }

    debug('Parsing PBF file');

    fs.createReadStream(inPath)
      .pipe(parseOSM())
      .pipe(iterateItems(onItem))
      .on('finish', () => onComplete());
  };
}

module.exports = pbfInput;
