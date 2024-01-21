function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation, e.g., fetching data from an API
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 1000);
    });
  }
  
//   module.exports = { fetchData };
export { fetchData };