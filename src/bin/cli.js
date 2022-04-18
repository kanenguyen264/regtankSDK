#!/usr/bin/env babel-node
const yargs = require("yargs");
yargs
  .command(require("./cmds/tsch"))
  .command(require("./cmds/snippets"))
  .command(require("./cmds/faker"))
  .command(require("./cmds/generact"))
  .help()
  .strict(true)
  .version(false)
  .parse();
