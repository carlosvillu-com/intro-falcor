var getConfig = require('hjs-webpack')
module.exports = getConfig({
  in: 'client/src/app.js',
  out: 'client/public',
  clearBeforeBuild: true
})

