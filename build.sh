#!/usr/bin/env bash
rm -rf ./build

function buildJs {
  tsc --project tsconfig.build.json
  # build JS sources
  NODE_ENV=production babel "src" --out-dir "build" \
    --config-file ./.babelrc.js \
    --extensions ".js,.jsx,.ts,.tsx" \
    --ignore "src/bin/**/*,src/**/*.d.ts,src/node_modules/**/*" \
    --copy-files

  rm -rf ./build/node_modules

  # build JS node CLI
  babel "src/bin" --out-dir "build/bin" \
    --no-babelrc \
    --presets=@babel/preset-env \
    --plugins=@babel/plugin-transform-runtime
}
buildJs &
# build SASS
node-sass \
  --importer node_modules/node-sass-package-importer/dist/cli.js \
  "src" -o "build" \
  &
wait
cp ./package.json ./build/package.json

sed -i -e 's/src\///g' ./build/package.json
rm ./build/package.json-e
sed -i -e 's/babel-node/node/g' ./build/bin/cli.js
rm ./build/bin/cli.js-e

#overwrite styles
rm -rf ./build/styles
cp -r ./src/styles ./build/styles
echo "completed"
