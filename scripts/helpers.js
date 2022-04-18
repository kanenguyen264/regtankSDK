const os = require("os");

function getLineFeed(source) {
  const match = source.match(/\r?\n/);
  return match === null ? os.EOL : match[0];
}

const fixBabelIssuesRegExp = new RegExp(/(?<=(\/>)|,)(\r?\n){2}/g);
function fixBabelGeneratorIssues(source) {
  return source.replace(fixBabelIssuesRegExp, "\n");
}

function fixLineEndings(source, target) {
  return target.replace(/\r?\n/g, getLineFeed(source));
}

const promiseMemoize = (fn) => {
  let cache = {};
  return (...args) => {
    let strX = JSON.stringify(args);
    return strX in cache
      ? cache[strX]
      : (cache[strX] = fn(...args).catch((x) => {
          delete cache[strX];
          return x;
        }));
  };
};

module.exports = {
  getLineFeed,
  fixBabelGeneratorIssues,
  fixLineEndings,
  promiseMemoize,
};
