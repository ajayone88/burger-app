import chalk from 'chalk';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../config/webpack.config';

const app = express();
const port = process.env.PORT;
const compiler = webpack(config);

//Dev middleware 
const devInstance = devMiddleware(compiler, config.devServer);
app.use(devInstance);

//Hot middleware 
const hotInstance = hotMiddleware(compiler);
app.use(hotInstance);

//Static content 
const statiContent = express.static(path.resolve(__dirname, '../dist'));
app.use(statiContent);

app.listen(port , ()=>{
    console.log(chalk.green.bold(`Application is up and runnig on port ${port}`));
});