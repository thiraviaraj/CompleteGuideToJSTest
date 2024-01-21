// Import the functions to be tested
import { processData } from './mockExample';


// Mock fetchDataFromApi function
// jest.mock('./dataProcessor', () => ({
//     fetchDataFromApi: jest.fn(),
//}));
global.fetch = jest.fn().mockImplementation(() => (jest.fn()));
describe('processData', () => {
    afterEach(() => {
        jest.resetAllMocks();
      });
  it('should process data and return the uppercase value', async () => {
    const mockData = 'Hello, World!';
    var spyObj = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await processData();
    expect(spyObj).toHaveBeenCalledTimes(1);
    expect(result).toBe('HELLO, WORLD!');
  });

  it('should handle errors and log them', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Call the processData function
    await expect(processData()).rejects.toThrow('Network error');

    // Assertions
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Network error');
  });
});
