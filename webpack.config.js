const path = require('path');

module.exports = {
    entry: [
      './src/firebase.js',
      './src/newsletter.js'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/sys')
    },
    mode: 'development'
  };