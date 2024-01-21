// domInteraction.js
export const updateElementText = (elementId, newText) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = newText;
    }
  };
  