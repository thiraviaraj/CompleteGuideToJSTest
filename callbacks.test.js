import { performOperation } from './callbacks';

test('performOperation calls the callback with the correct result', (done) => {
  function callback(result) {
    expect(result).toBe(10);
    done(); // Call done to indicate the asynchronous test is complete
  }

  performOperation(5, callback);
});


describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('1 - beforeAll'));
    afterAll(() => console.log('1 - afterAll'));
    beforeEach(() => console.log('1 - beforeEach'));
    afterEach(() => console.log('1 - afterEach'));

test('Setup AND Teardown', () => console.log('2 - test'));
});