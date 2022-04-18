"use strict";

exports.__esModule = true;
exports.default = _default;

function _default(babel) {
  const {types: t, template} = babel;
  return {
    name: "ast-transform",
    // not required
    visitor: {
      Program: {
        enter(path) {
          path.node.__source = this.file.code;
        },

        exit(path) {
          path.pushContainer(
            "body",
            template(`export const __source=SOURCE`)({
              SOURCE: t.stringLiteral(path.node.__source),
            }),
          );
        },
      },
    },
  };
}
