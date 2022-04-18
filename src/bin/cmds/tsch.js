const axios = require("axios"),
  { compile } = require("json-schema-to-typescript"),
  fs = require("fs"),
  path = require("path"),
  { get, set } = require("lodash");

axios.defaults.validateStatus = function () {
  return true;
};

async function tsch({ url, output, jsonPath }) {
  const { status, data } = await axios.get(
    process.env.REACT_APP_BASE_API_URL + url,
  );
  // console.log(data);
  if (status > 400) {
    console.error(`Something went wrong from server. Status = ${status}`);
    return;
  }
  let definitions = get(data, jsonPath),
    program = set(
      {
        type: "object",
        properties: Object.keys(definitions).reduce((acc, schName) => {
          return {
            ...acc,
            [schName]: {
              $ref: `#/${jsonPath.replace(/\./g, "/")}/${schName}`,
            },
          };
        }, {}),
      },
      jsonPath,
      definitions,
    ),
    finalTs = (await compile(program, "APIReference"))
      .replace(/\[.[^;\n]+;/g, "")
      .replace(/\?:/g, ":")
      .replace(/interface TimestampRes/, "interface TimestampRes extends Date");

  fs.writeFileSync(path.join(process.cwd(), output), finalTs);
}

module.exports = {
  command: "tsch [url] [output]",
  builder: (command) =>
    command.option("jsonPath", {
      default: "definitions",
      describe: "Chi dinh json key dan den model schemas cua App",
      type: "string",
    }),
  handler: tsch,
};
