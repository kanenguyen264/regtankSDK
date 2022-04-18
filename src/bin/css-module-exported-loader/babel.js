const { getHashDigest } = require("loader-utils");

const cache = {};

module.exports = function ({ types }) {
  return {
    visitor: {
      MemberExpression(path) {
        if (
          types.isIdentifier(path.node.object) &&
          /([sS])tyles$/.test(path.node.object.name) &&
          types.isIdentifier(path.node.property)
        ) {
          const oldName = path.node.property.name;
          if (cache[oldName]) return;
          const newName = getHashDigest(oldName, "sha1", "base52", 5);
          // console.log(oldName, typeof oldName);
          // process.exit(0);
          // if (oldName === "PieChart") console.log(oldName, newName);
          path.node.property = types.identifier(newName);
          cache[newName] = true;
          path.skip();
        }
      },
    },
  };
};
