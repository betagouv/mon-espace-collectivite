module.exports = {
  printWidth: 150,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: "always",
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@mediature/(.*)$', '^(ui|ui/(.*))$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
