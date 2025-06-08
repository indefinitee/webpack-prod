const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const cacheDir = path.resolve(rootDir, 'node_modules', '.cache');

require('rimraf').sync(cacheDir);

console.log('Cache cleared');