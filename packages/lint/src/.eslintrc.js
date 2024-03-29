// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:json/recommended',
    'turbo',
    'airbnb/base',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    // We want this on, but a lot of libraries we integrate with need commonJs (eslint, next config ...)
    'unicorn/prefer-module': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'no-continue': 'off',
    'prettier/prettier': 'error',
    // Null and undefined have different intent in our code, especially for integration with prisma and trpc
    'unicorn/no-null': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    // When hunting dead code it's useful to use the following:
    // ---
    // 'no-unused-vars': 'error',
    // 'import/no-unused-modules': [1, { unusedExports: true }],
  },
  parserOptions: {
    sourceType: 'module',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // eslint-disable-next-line no-path-concat, unicorn/prefer-module
        project: `${__dirname}/../../../tsconfig.eslint.json`,
      },
      plugins: ['@typescript-eslint', 'import', 'prettier'],
      extends: [
        'turbo',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'prettier',
      ],
      settings: {
        'import/resolver': {
          typescript: 'true',
          node: 'true',
        },
      },
      rules: {
        'no-irregular-whitespace': 'off',
        'no-restricted-syntax': 'off',
        'prettier/prettier': 'error',
        'no-continue': 'off',
        // Typescript compiler will avoid errors based on inconsistent returns
        'consistent-return': 'off',
        'import/order': 'error',
        // Module resolve leads to false negatives in monorepo, typescript compiler will handle any error
        'import/no-unresolved': [2, { ignore: ['^@app/', '^react-hook-form/dist'] }],
        // This rule is unreliable in monorepos and typescript compiler will help on bad imports
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        // We want to make sure anyone ask the question, should i await this promise ?
        '@typescript-eslint/no-floating-promises': 'warn',
        'unicorn/no-array-callback-reference': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        // Null and undefined have different intent in our code, especially for integration with prisma and trpc
        'unicorn/no-null': 'off',
        'react/function-component-definition': 'off',
        'import/no-named-as-default': 'off',
        // We use typescript default values and types
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              Props: true,
              props: true,
              args: true,
              Param: true,
              param: true,
              Params: true,
              params: true,
              Env: true,
              env: true,
              ref: true,
              Ref: true,
              refs: true,
              Refs: true,
              res: true,
            },
          },
        ],
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
          },
        ],
      },
    },
  ],
};
