const path = require('path');

module.exports = (...segments) => path.resolve(__dirname, '..', '..', 'src', ...segments);
