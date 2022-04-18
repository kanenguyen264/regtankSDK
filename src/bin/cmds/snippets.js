const fs = require("fs"),
  path = require("path");
const parser = require("@babel/parser").parse;
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default,
  template = require("@babel/template").default;
const t = require("@babel/types");
const prettier = require("prettier");
const { promisify } = require("util");

const cwd = process.cwd(),
  prettierConfig = prettier.resolveConfig.sync(cwd);

const SourceFileCreator = (baseDir) => (moduleFileName, ext = "js") => {
  const filePath = path.join(cwd, baseDir, `${moduleFileName}.${ext}`),
    exists = fs.existsSync(filePath);
  return {
    filePath,
    exists,
    /**
     *
     * @returns {Promise<string>}
     */
    read: () =>
      promisify(fs.readFile)(filePath, {
        encoding: "utf8",
      }),
    /**
     *
     * @param content
     * @returns {Promise<void>}
     */
    write: (content) =>
      promisify(fs.writeFile)(filePath, content, {
        encoding: "utf8",
      }),
  };
};

const rwActionFiles = SourceFileCreator("src/actions");
const addAction = async ({ moduleName, name, actionName }) => {
  const tmpl = template(`export const NAME = createAwaitAction("ACTION_NAME")`);
  const withExt = async (ext, opts = {}) => {
    const rw = rwActionFiles(moduleName, ext);
    if (!rw.exists) return;
    const jsContent = await rw.read(),
      ast = parser(jsContent, {
        sourceType: "module",
        sourceFilename: rw.filePath,
        ...opts,
      });

    let program = await new Promise((resolve) => {
      traverse(ast, {
        Program(p) {
          resolve(p);
        },
      });
    });
    program.pushContainer(
      "body",
      tmpl({
        NAME: moduleName + "_" + name,
        ACTION_NAME: actionName,
      }),
    );
    const newJsCode = prettier.format(generate(ast).code, {
      ...prettierConfig,
      filepath: rw.filePath,
    });
    await rw.write(newJsCode);
  };
  await Promise.all([
    withExt("js"),
    withExt("d.ts", {
      errorRecovery: true,
      plugins: ["typescript"],
    }),
  ]);
};

module.exports = {
  command: "snippet",
  aliases: ["sn"],
  builder: (yargs) =>
    yargs.command({
      command: "add action [moduleName] [name] [actionName]",
      handler: addAction,
    }),
};
