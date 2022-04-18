const path = require("path"),
  fs = require("fs"),
  util = require("util"),
  Handlebars = require("handlebars");

const readFileAsync = util.promisify(fs.readFile),
  writeFileAsync = util.promisify(fs.writeFile),
  regExtract = /\/\/region\sdoc(.*?)\/\/endregion/s,
  regExclude = /\/\/exclude/g,
  cpResource = (p) => path.resolve(__dirname, "../../ProtegoClientPortal/Frontend/src/", p),
  crmResource = (p) => path.resolve(__dirname, "../../ProtegoCRM/Frontend/src/", p),
  themeTmpl = Handlebars.compile(`
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import BaseMuiTheme from "@protego/sdk/UI/MuiTheme";

{{{source}}}
  `);

async function copy(from, to) {
  const content = await readFileAsync(from, "utf8"),
    main = regExtract
      .exec(content)[1]
      .split("\n")
      .filter((line) => !regExclude.test(line))
      .join("\n");
  await writeFileAsync(to, themeTmpl({ source: main }), "utf8");
}

(async function () {
  await Promise.all([
    copy(
      cpResource("constants/MuiTheme.js"),
      path.resolve(__dirname, "../website/includes/cp/MuiTheme.js"),
    ),
    copy(
      crmResource("constants/MuiTheme.js"),
      path.resolve(__dirname, "../website/includes/crm/MuiTheme.js"),
    ),
  ]);
})();
