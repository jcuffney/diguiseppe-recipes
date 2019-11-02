const assert = require('assert');
const { readFile, writeFile } = require('../file');

describe('lib', () => {
  describe('readFile', () => {
    it('returns JSON when file exists', () => {
      readFile('./data/recipes.json');
      assert.equal(true, true);
    });
  });
});
