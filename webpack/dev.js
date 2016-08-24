var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var compiler = webpack(config);

var app = express();

var options = {
  root: __dirname + '/..' + config.output.publicPath,
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

app.use(express.static('dist/dev'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile('index.html', options);
});

app.listen('3030', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('TODO App listening at http://localhost:3030');
});
