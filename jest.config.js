function makeAliasesModuleNameMap(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1');
    aliases[key] = srcPath + '/' + path;
  });
  return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';
const SRC_PATH = '<rootDir>/src';

const aliasesMap = makeAliasesModuleNameMap(SRC_PATH, TS_CONFIG_PATH);

module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>'],
  modulePaths: ['<rootDir>', '<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  testRunner: '<rootDir>\\node_modules\\jest-circus\\runner.js',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    '/node_modules/(?![web-vitals/dist/lib/generateUniqueID]).+\\.js$',
    '/node_modules/(?![web-vitals/dist/lib/generateUniqueID]).+\\.ts$',
    '/node_modules/(?![web-vitals/dist/lib/generateUniqueID]).+\\.tsx$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    ...aliasesMap,
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
