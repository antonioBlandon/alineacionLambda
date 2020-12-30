module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.js"],
  coverageDirectory: "__tests__/coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)",
  ],
};
