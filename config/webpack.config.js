import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const devMode = process.env.NODE_ENV !== 'production';
const config = {
    entry:['webpack-hot-middleware/client?reload=true', './src/index.js'],
    output:{
        filename: '[name]-bundel.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer:{
        contentBase: 'dist',
        hot: true,
        stats:{
            colors:true
        }
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true,
                        }
                    },
                    // devMode ? {
                    //     loader:'null-loader'
                    // } : {
                    //     loader: 'postcss-loader',
                    //     options:{
                    //         config:{
                    //             path:'./config/'
                    //         }
                    //     }
                    // } 
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{
                            attributes:{
                                list:[
                                    {
                                        tag:'img',
                                        attribute:'src',
                                        type:'src'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(jpg|png)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'./images/[name]-[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename:'./css/index.css'
        }),
        new HTMLWebpackPlugin({
            template:'./src/index.html',
            filename: 'index.html'
        })
    ]
};

export default config;