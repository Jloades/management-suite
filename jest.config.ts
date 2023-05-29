export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transformIgnorePatterns: ['./node_modules/'],
    moduleNameMapper: {
      "^axios$": "<rootDir>/node_modules/axios/dist/node/axios.cjs"
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };