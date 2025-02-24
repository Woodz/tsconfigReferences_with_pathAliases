Reproduction for https://github.com/kulshekhar/ts-jest/issues/4702

This demonstrates how ts-jest pathsToModuleNameMapper does not work correctly with conflicting aliases with multiple TS projects linked via tsconfig references.

Steps:
Run yarn install
Run yarn test
