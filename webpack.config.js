const buildValidations = require("./build-util/build-validations");
const commonConfig = require("./build-util/webpack.common");

const { merge } = require("webpack-merge");

const addons = addonsArg => {
  let addons = [...[addonsArg]].filter(Boolean);

  return addons.map(addonName =>
    require(`./build-util/addons/webpack.${addonName}.js`)
  );
};

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./build-util/webpack.${env.env}.js`);
  const mergedConfig = merge(commonConfig, envConfig, ...addons(env.addons));
  return mergedConfig;
};
