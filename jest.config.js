/** @type {import('jest').Config} */
const config = {
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
  coverageReporters: ['lcov', 'text', 'html'], // Add this line for HTML coverage report
  collectCoverage: true, // Ensure coverage is collected
  coverageDirectory: 'coverage', // Set the directory for coverage reports
  };
  
  module.exports = config;
