const { getHashDigest } = require("loader-utils"),
  babylon = require("babylon"),
  traverse = require("@babel/traverse").default,
  types = require("@babel/types"),
  generate = require("@babel/generator").default;

function isExportLocalAssignment(node) {
  let rs = types.isMemberExpression(node.left);
  if (rs) rs &= types.isIdentifier(node.left.object, { name: "exports" });
  if (rs) rs &= types.isIdentifier(node.left.property, { name: "locals" });
  return rs;
}
const replaceTraverse = {
  ObjectProperty(path) {
    const property = path.node.key.value;
    if (typeof property === "string") {
      const newProperty = getHashDigest(property, "sha1", "base52", 5);
      if (property === "PieChart") console.log(property, newProperty);
      path.node.key = types.stringLiteral(newProperty);
    } else console.log(node.key);
  },
};

module.exports = function (source) {
  const ast = babylon.parse(source);
  let willMangled = false;
  traverse(ast, {
    AssignmentExpression(path) {
      if (isExportLocalAssignment(path.node)) {
        //do stuffs
        willMangled = true;
        path.traverse(replaceTraverse);
      }
    },
  });
  if (!willMangled) return source;
  let code;
  try {
    code = generate(ast, {}, source).code;
  } catch (e) {
    console.log(source);
    console.error(e);
    process.exit(0);
  }
  return code;
};
