import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
import { compilerOptions } from './tsconfig.json'

const contentServiceJestConfig = {
  // Start of properties defined by running `yarn ts-jest config:init` as per
  // https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file
  preset: 'ts-jest',
  testEnvironment: 'node',
  // End of `ts-jest` properties
  transform: {
    // Explicitly set `isolatedModules` to false to highlight the default value. This means that tests are type checked by ts-jest, which makes running tests slower
    // eslint-disable-next-line @typescript-eslint/naming-convention -- Transform key names are regexes (https://jestjs.io/docs/code-transformation)
    '^.+\\.ts$': ['ts-jest', { isolatedModules: false }],
  },

  // Copy path mappings from tsconfig.json as per https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
} satisfies JestConfigWithTsJest;

export default contentServiceJestConfig;
