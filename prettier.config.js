module.exports = {
  printWidth: 80,
  singleQuote: false,
  trailingComma: "all",
  overrides: [
    {
      files: "*.d.ts",
      options: {
        // This is needed for TypeScript 3.2 support
        trailingComma: "es5",
      },
    },
  ],
};
