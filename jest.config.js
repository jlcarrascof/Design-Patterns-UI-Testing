const TIMEOUT = 60000; // 60 seconds

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  testTimeout: TIMEOUT,
};
