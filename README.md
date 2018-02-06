# React Redux Boilerplate

## About

This is a starter project for microfrontends at Talkdesk using React and Redux, ready to run locally powered by an express server to serve as a mock if needed.

### Features

* React
* Redux and react-redux
* Jest for tests
* Webpack & Babel
* [Standard](http://standardjs.com) coding style via ESLint

Currently no CSS framework is being used, but we are more than pleased to accept a pull request :)

## Setup

Clone the boilerplate repository:

```
git clone https://github.com/talkdesk/react-redux-boilerplate myapp
cd myapp
```

Update the remote location:

```
git remote set-url origin <your-remote-location>
```

Rename `myapp` occurrences to a relevant name:
* `internals/webpack/webpack.base.babel.js:13`
* `internals/webpack/webpack.base.babel.js:65`
* `internals/webpack/webpack.dev.babel.js:28`
* `package.json:23`
* `src/index.js:12`
* `src/index.ejs:6`
* `src/index.ejs:168`
* `src/index.ejs:194`
* `src/index.ejs:195`
* `docker-compose.yml:6`
* `docker-compose.yml:7`
* `docker-compose.yml:14`
* `docker-compose.yml:15`

Commit the rename changes:

```
git add .
git commit -m "Rename app"
```

Squash all history into a single commit:

```
git checkout --orphan newBranch
git add -A
git commit -am 'Initial commit'
git branch -D master
git branch -m master
git push -f origin master
git gc --aggressive --prune=all
```

Then inside the folder run:

```
yarn install
```

## Run

### Storybook

To start the Storybook visualizer (`http://localhost:9001`)

```
yarn storybook
```

### Dev server

To start the dev server locally with hot reloading (`http://localhost:3030`)

```
yarn start
```

### Tests

Run all tests:
```
yarn test
```

Run tests related to uncommitted files:

```
yarn test:changes
```

Run tests that match the given spec name:

```
yarn test:spec <name-of-spec>
```

Run tests related to uncommitted files in watch mode:

```
yarn test:watch
```

Run all tests in watch mode:

```
yarn test:watchAll
```

Generate code coverage reports:

```
yarn test:coverage
```


### Build

```
yarn build
```

## Docker Support

Both the app and the tests can be run inside a Docker container.

### Tests
```
docker-compose build && docker-compose run tests
```

### Application
```
docker-compose build && docker-compose run myapp
```

or

```
docker-compose up myapp
```

The app is then available at `localhost:3030`. The port can be changed in `docker-compose.yml` file.

## License

MIT (see LICENSE file)
