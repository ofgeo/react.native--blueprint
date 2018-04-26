const REGION_EXTENSIONS = {
  hongkong: 'hongkong.js',
  malaysia: 'malaysia.js',
  indonesia: 'indonesia.js',
  singapore: 'singapore.js',
};

const REGION = Object.keys(REGION_EXTENSIONS).find(function (element) {
  return process && process.argv && process.argv.indexOf(element) !== -1;
});

module.exports = [
  process
  && REGION
  && REGION_EXTENSIONS[REGION], 'mock.js'].reduce(function (accumulator, ext) {
  if (ext) {
    accumulator.push(ext);
  }
  return accumulator
}, []);