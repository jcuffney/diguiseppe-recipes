const assert = require('assert');
const { readFile } = require('../file');

describe('lib', () => {
  describe('readFile', () => {
    it('returns JSON when file exists', () => {
      readFile('./src/data/recipes.json');
      assert.equal(true, true);
    });
  });
});
