import express from 'express';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../webpack.config';

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(webpackMiddleware(webpack(config)))

app.get('/model.json', (req, resp) => {
  resp.send('Hello world!');
});

app.listen( PORT , () => {
  console.log('App running ...');
});
