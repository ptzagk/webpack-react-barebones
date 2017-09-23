# webpack-react-barebones
<div align="center"><img src="http://dev.topheman.com/wp-content/uploads/2015/11/react-webpack.png" alt="Banner" /></div>

Barebones Webpack and React with Express and Hot Module Reloading (before using webpack-isomorphic-tools and Redux and router)

* [Express](https://expressjs.com/)
* [React](https://facebook.github.io/react/)
* [Webpack 3](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [PostCSS](https://github.com/postcss/postcss-loader)
* [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) serves the files emitted from webpack over the Express server
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server
* [ESLint](http://eslint.org/) to maintain a consistent javascript code style (Airbnb's code style)
* [StyleLint](http://stylelint.io/) to maintain a consistent css/scss code style
* Styles with CSS [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) for minified css bundle generation
* Image (with [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) for optimizing) and Font support
* Split vendor's libraries for vendor and bundle generation for caching only vendor using webpack.CommonsChunkPlugin
* Webpack Hot Middleware with [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)

## Do you need this project?

This repository is for those with basic knowledge of React and Express requiring barebones startup and looking forward to build a server-side app. You can add isomorphic and other libraries as and how it fits 


## Requirements

* [node](https://nodejs.org/en/) >= 6.0
* [npm](https://www.npmjs.com/) >= 3.0


## Getting Started

**1. You can start by downloading the files or cloning the repository through your Terminal by running:**

```bash
git clone https://github.com/rahulbasu710/webpack-react-barebones.git
cd webpack-react-barebones
```

**2. Install all of the dependencies:**

```bash
npm install
```

**3. Start to run it:**

```bash
npm run build         # Building the bunlde against NODE_ENV=production
npm run start:prod    # Building bundle and running production server
```
**4. Running against Dev Environment with Hot-Reloading:**

```bash
npm run start         # Starts the webpack-dev-server and any changes to it shall be rendered instantenously with Hot Reloading
```


Now the app should be running at [http://localhost:8080/](http://localhost:8080/)
