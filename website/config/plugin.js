const path = require("path");
const {excludeJS} = require("@docusaurus/core/lib/webpack/base");

require("@babel/register");

module.exports = function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack(config, isServer, utils) {
      // console.log(config.module.rules);
      // process.exit(0);
      const {getCacheLoader, getBabelLoader} = utils;
      const rules = [...config.module.rules];
      rules.splice(3, 1, {
        test: /\.(j|t)sx?$/,
        exclude: [excludeJS, /\/UI\//],
        use: [
          getCacheLoader(isServer),
          getBabelLoader(isServer, {
            presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
          }),
        ].filter((val) => val != null),
      });
      rules.splice(6, 1, {
        test: /\.svg$/,
        use: [
          "@svgr/webpack?-svgo,+titleProp,+ref![path]",
          require.resolve("file-loader"),
        ],
      });
      rules.push({
        test: /\.(j|t)sx?$/,
        include: /\/UI\//,
        use: [
          getBabelLoader(isServer, {
            presets: [
              require.resolve("@docusaurus/core/lib/babel/preset"),
              require.resolve("@babel/preset-flow"),
            ],
            plugins: [
              require.resolve("babel-plugin-react-docgen"),
              ["@babel/plugin-proposal-pipeline-operator", {proposal: "smart"}],
            ],
          }),
        ].filter(Boolean),
      });
      rules.push({
        test: /\.(j|t)sx?$/,
        include: /\/docs\//,
        use: [
          getBabelLoader(isServer, {
            presets: [
              require.resolve("@docusaurus/core/lib/babel/preset"),
              require.resolve("@babel/preset-flow"),
            ],
            plugins: [require.resolve("./babel-plugin-source")],
          }),
        ].filter(Boolean),
      });

      return {
        mergeStrategy: {"module.rules": "replace"},
        resolve: {
          alias: {
            react: path.resolve(__dirname, "../node_modules/react"),
            "react-router": path.resolve(
              __dirname,
              "../node_modules/react-router",
            ),
            "react-router-dom": path.resolve(
              __dirname,
              "../node_modules/react-router-dom",
            ),
            "@protegoTheme": path.resolve(__dirname, "../src/mdxTheme/"),
            "@protego/sdk": path.resolve(__dirname, "../../src/"),
            "include-cp-theme": path.resolve(
              __dirname,
              process.env.NODE_ENV === "development"
                ? "../../../ProtegoClientPortal/Frontend/src/constants/MuiTheme"
                : "../includes/cp/MuiTheme",
            ),
            "include-cp-intl": path.resolve(
              __dirname,
              process.env.NODE_ENV === "development"
                ? "../../../ProtegoClientPortal/Frontend/src/lngProvider"
                : "../includes/cp/lngProvider",
            ),
            "include-crm-theme": path.resolve(
              __dirname,
              process.env.NODE_ENV === "development"
                ? "../../../ProtegoCRM/Frontend/src/constants/MuiTheme"
                : "../includes/crm/MuiTheme",
            ),
            "include-crm-intl": path.resolve(
              __dirname,
              process.env.NODE_ENV === "development"
                ? "../../../ProtegoCRM/Frontend/src/lngProvider"
                : "../includes/crm/lngProvider",
            ),
          },
        },
        module: {
          rules,
        },
      };
    },
  };
};
