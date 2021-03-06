var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: './example'
}).listen(9001, err => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:9001');
});
