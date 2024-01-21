export const processData = async () => {
  try {
    const data = await fetchDataFromApi();
    // Perform some processing on the data
    return data.toUpperCase();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export const fetchDataFromApi = async () => {
    // Assume this function makes an API call
    // In this example, we'll keep it simple and return a hardcoded value
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    return data;
  };