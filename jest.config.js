module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\.(png|gif|ttf|eot)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(svg)$": "<rootDir>/test/__mocks__/svgIconMock.js",
  },
  moduleDirectories: ["src", "node_modules"],
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts"],
  transformIgnorePatterns: ["node_modules/"],
  testEnvironment: "jsdom",
};
