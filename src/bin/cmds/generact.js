const { getComponentFiles, getComponentName } = require("generact"),
  inquirer = require("inquirer"),
  autocomplete = require("inquirer-autocomplete-prompt"),
  config = require("../utils/config"),
  path = require("path"),
  {
    name: askName,
    folder: askFolder,
    component: askComponent,
  } = require("generact/dist/prompts");

const { generact: generactConfig, cwd } = config;

/**
 *
 * @param {InquirerFile[]} files
 */
const filterComponentFiles = (files) => {
  return files.filter((file) => {
    const folderName = path.basename(path.dirname(file.value)),
      fileName = path.basename(file.value, ".js");
    return fileName === folderName;
  });
};

const component = (files) => ({
  type: "autocomplete",
  name: "component",
  message: "Which component do you want to replicate?",
  source: (_, input) =>
    Promise.resolve(
      files.filter(
        (file) =>
          !input || file.value.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      ),
    ),
});

async function replication(componentPath) {
  const originalName = getComponentName(componentPath);
  const answers = await inquirer.prompt([askName(originalName), askFolder()]);
}

async function run() {
  const files = filterComponentFiles(
    await getComponentFiles(generactConfig.dir),
  );

  inquirer.registerPrompt("autocomplete", autocomplete);
  const answers = await inquirer.prompt([component(files)]);
  return await replication(answers.component);
}

module.exports = {
  command: "generact",
  handler: run,
};
