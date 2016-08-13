# Example Node Server with Babel, Express, IntelliSense and Typings

### Getting Started

First we'll install `babel-cli`.

Install globaly:

```shell
$ npm install -g babel-cli
```

Clone or download this repo, then navigate to code directory.

Then install local packages of our project.

```shell
$ npm install
```

After that, we'll install Typings.

Install globaly:

```shell
$ npm install -g typings
```

Then run following commands:

```shell
$ typings install dt~node --global
$ typings install dt~express dt~serve-static dt~express-serve-static-core --global
```
### Script

Development:

```shell
$ npm run start
```

Production:

```shell
$ npm run build
```

or

```shell
$ npm run serve
```
