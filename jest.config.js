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
  };
  
  module.exports = config;