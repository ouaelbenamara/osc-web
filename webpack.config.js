const path = require('path');

module.exports = {
    entry: {
      home: [
        './src/firebase.js',
        './src/newsletter.js'
      ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public/sys')
    },
    mode: 'development'
};