const config = require("../utils/config");
const jsf = require("json-schema-faker");
const fs = require("fs"),
  path = require("path"),
  range = require("lodash/range");

const { faker: fakerConfig, cwd } = config;

const alphaNumeric = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

jsf.option({
  resolveJsonPath: true,
});
jsf.extend("chance", () => require("chance"));
jsf.extend("faker", () => {
  const faker = require("faker");
  let incrementId = 0;
  faker.custom = {
    incrementId: () => ++incrementId,
    walletId: () => {
      return range(66)
        .map((i) => {
          const c = faker.random.arrayElement(alphaNumeric);
          return faker.random.boolean() ? c.toUpperCase() : c;
        })
        .join("");
    },
    user: () => {
      const firstName = faker.name.firstName(),
        lastName = faker.name.lastName();
      return {
        id: faker.random.uuid(),
        firstName,
        lastName,
        avatar: (firstName[0] + lastName[0]).toUpperCase(),
        colorCode: faker.internet.color(128, 128, 128),
      };
    },
  };
  return faker;
});

async function run({ name }) {
  const mockDir = fakerConfig.dir,
    fullSchemaFile = path.join(mockDir, `${name}.schema.json`),
    generatedFile = path.join(mockDir, `${name}.json`);

  const schema = JSON.parse(fs.readFileSync(fullSchemaFile));

  const mock = await jsf.resolve(schema);

  fs.writeFileSync(generatedFile, JSON.stringify(mock));
}

module.exports = {
  command: "faker [name]",
  aliases: ["fk"],
  handler: run,
};
