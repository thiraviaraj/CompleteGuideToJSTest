// domInteraction.test.js
import { updateElementText } from './domInteraction';
// npm install --save-dev jsdom
import { JSDOM } from 'jsdom';

// Set up a mock DOM using jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

// Mocking the DOM
beforeEach(() => {
  document.body.innerHTML = `
    <div id="targetElement">Original Text</div>
  `;
});

// Clear the DOM after each test
afterEach(() => {
  document.body.innerHTML = '';
});

describe('updateElementText', () => {
  it('updates the text content of an element', () => {
    // Call the function being tested
    updateElementText('targetElement', 'New Text');

    // Assertions
    const targetElement = document.getElementById('targetElement');
    expect(targetElement.textContent).toBe('New Text');
  });

  it('does nothing if the element is not found', () => {
    // Call the function being tested with an invalid element ID
    updateElementText('nonExistentElement', 'Should not update');

    // Assertions
    const targetElement = document.getElementById('targetElement');
    expect(targetElement.textContent).toBe('Original Text');
  });
});
