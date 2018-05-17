const chalk = require('chalk');

const REGION_EXTENSIONS = {
  hongkong: 'hongkong.js',
  indonesia: 'indonesia.js',
  malaysia: 'malaysia.js',
  singapore: 'singapore.js',
};

const keys = Object.keys(REGION_EXTENSIONS);

const extension = keys.find(function (element) {
  if (!process) {
    return undefined;
  }

  if (process.env && process.env.MARKET_ENV) {

    if (!REGION_EXTENSIONS[process.env.MARKET_ENV]) {
      console.log(chalk.bold.red(`MARKET_ENV should be one of ${keys}`));
      throw new Error();
    }

    if (element === process.env.MARKET_ENV) {
      console.log(`Found MARKET_ENV=${process.env.MARKET_ENV}`, ", cli Flag will be ignore");
      return true;
    }

    return false;
  }

  return process.argv && process.argv.indexOf(`--${element}`) !== -1;
});

const ext = REGION_EXTENSIONS[extension];

if (ext) {
  console.log(chalk.bold.green("Applying market extension:", ext));
}
module.exports = REGION_EXTENSIONS[extension];

/**
 * Using environment variables MARKET_ENV
 * { One of hongkong, indonesia, malaysia, singapore }
 *
 * example: MARKET_ENV=hongkong
 *
 *
 * Using cli flags
 * { One of --hongkong, --indonesia, --malaysia, --singapore }
 * example: yarn start --hongkong
 *
 * NOTE: if MARKET_ENV is found, flag will be ignore
 */
