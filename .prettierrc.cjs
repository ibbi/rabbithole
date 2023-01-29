/**
 * @type {import('prettier').Options}
 */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: true,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: [require.resolve("@plasmohq/prettier-plugin-sort-imports")],
  importOrder: ["^@plasmohq/(.*)$", "^~(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
