// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  root: true,
  extends: ['./packages/lint/src/.eslintrc.js'],
  rules: {
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
  },
};
