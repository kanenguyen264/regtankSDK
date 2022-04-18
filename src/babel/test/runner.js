const babel = require("@babel/core"),
  path = require("path"),
  plugin = require("../babel-plugin-jsx-fast-classname");

const { code } = babel.transformFileSync(path.join(__dirname, "input.js"), {
  presets: [require.resolve("@babel/preset-react")],
  plugins: [plugin],
});
console.log(code);
