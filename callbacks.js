function performOperation(value, callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const result = value * 2;
      callback(result);
    }, 1000);
  }

export {performOperation};