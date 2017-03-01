# This is an example Rails 5.1.0 app with the following setup:

- [Webpack](https://webpack.github.io/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Jest](https://facebook.github.io/jest/)
- [Babel configured for stage-2](https://babeljs.io/docs/plugins/preset-stage-2/)

Check out the [commit history](https://github.com/paulsturgess/todos-5.1.0/commits/master) to see how I configured various parts of the app.

## Run the app locally

- Install [Yarn](https://yarnpkg.com/en/)
- Ensure node version is >=4.7 https://github.com/rails/webpacker/issues/103
- bundle
- forego start
- visit http://localhost:5000

## Installation notes

It was created via: `rails new todos-5.1.0 --webpack=react`

## Interesting files not present in previous versions of Rails

- [package.json](package.json)
- [yarn.lock](yarn.lock)
- [.babelrc](.babelrc)
- [config/webpack/shared.js](config/webpack/shared.js)
- [app/javascript/packs](app/javascript/packs)
- [bin/webpack-dev-server](bin/webpack-dev-server)

## Hot-reloading

When updating a file in /app/javascript the browser will auto-reload on save.

This works by using [Forego](https://github.com/ddollar/forego) with a [Procfile](Profile) to run the webpack-dev-server:

```
rails: bin/rails s
webpack: ./bin/webpack-dev-server
```

Then set `config.x.webpacker[:dev_server_host] = "http://localhost:8080"` in [config/environments/development.rb](config/environments/development.rb)

## Compile without hot-reloading

You could open a new tab and run `./bin/webpack-watcher` to have your js compiled automatically on change, but you will need to refresh the browser.

Note when adding new files to app/javavascript you need to re-start webpack-watcher

## Experimental js features

I enabled exerimental js features like the spread `...` operator via:

```
yarn add --dev babel-preset-stage-2
```

Then changed `.babelrc` to:

```
{
  "presets": ["es2015", "react", "stage-2"]
}
```

## JS Testing with Jest

I've created my js tests in: `/app/javascript/__tests__`

They can be run with code coverage via:

```
yarn test
```

This is configured inside [package.json](package.json)
