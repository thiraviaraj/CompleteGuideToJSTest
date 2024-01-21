// asyncFunctions.test.js

// const { fetchData } = require('./apiservice');
import { fetchData } from "./apiService";
test('fetchData resolves with correct message', () => {
  // Use return to make Jest wait for the Promise to resolve
  return fetchData().then((data) => {
    expect(data.message).toBe('Data fetched successfully');
  });
});

// Alternatively, you can use async/await syntax for cleaner code
test('fetchData resolves with correct message using async/await', async () => {
  const data = await fetchData();
  expect(data.message).toBe('Data fetched successfully');
});