const hello = require('../src/hello');

describe('setup', () => {
  test('1+1', () => {
    expect(hello('vato')).toEqual('hello vato');
  });
});
