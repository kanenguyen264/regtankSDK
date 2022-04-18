const { declare } = require("@babel/helper-plugin-utils"),
  t = require("@babel/types");
// import {
//   isTransparentExprWrapper,
//   skipTransparentExprWrappers,
// } from "@babel/helper-skip-transparent-expression-wrappers";
// import syntaxOptionalChaining from "@babel/plugin-syntax-optional-chaining";

module.exports = declare(
  /**
   *
   * @param api
   * @param options
   * @returns {TraverseDeclaration}
   */
  (api, options) => {
    return {
      name: "jsx-fast-classname",
      visitor: {
        JSXAttribute(path) {
          if (
            path.get("name").isJSXIdentifier({ name: "className" }) &&
            t.isSequenceExpression(path.get("value.expression"))
          ) {
            const oldExpressions = path.node.value.expression.expressions;
            path.node.value.expression = t.callExpression(
              t.identifier("clsx"),
              oldExpressions,
            );
          }
        },
      },
    };
  },
);
