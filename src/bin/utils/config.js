const path = require("path"),
  fs = require("fs"),
  deepmerge = require("@material-ui/utils/deepmerge").default,
  dotenv = require("dotenv");

dotenv.config();

const cwd = process.cwd(),
  configFile = path.resolve(cwd, ".protego.js"),
  protegoConfig = fs.existsSync(configFile) ? require.resolve(configFile) : {};

function absoluterized(configObj) {
  for (let prop in configObj) {
    if (configObj.hasOwnProperty(prop)) {
      if (prop === "dir" && typeof configObj[prop] === "string")
        configObj[prop] = path.join(cwd, configObj[prop]);
      if (typeof configObj[prop] === "object") {
        configObj[prop] = absoluterized(configObj[prop]);
      }
    }
  }
  return configObj;
}

const { schemaTypings, faker, generact } = absoluterized(
  deepmerge(
    {
      schemaTypings: "src/typings-api.d.ts",
      faker: {
        dir: "src/__mock",
      },
      generact: {
        dir: "src/__template",
      },
    },
    protegoConfig,
  ),
);

const config = {
  cwd,
  schemaTypings,
  faker,
  generact,
};

module.exports = config;
