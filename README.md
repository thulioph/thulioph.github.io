# My Personal Website

> thulioph.com

## Requirements

In order to run this project locally, you must have:

- [Nodejs@12.14.0](https://nodejs.org/dist/v12.14.0/)
- [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)

## Usage

To install all dependencies, run:

```bash
$ npm install
```

### development

To start the **development** mode, run:

```bash
$ npm run dev
```

### production

To build a **production** version, run:

```bash
$ npm run build
```

To **serve the production** version, run:

```bash
$ npm run serve
```

### deploy

#### from local environment

In case you want to deploy your local code, we're using [gh-pages](https://github.com/tschaub/gh-pages#command-line-utility), and you need to run:

```bash
$ npm run deploy
```

#### from github actions

Once your changes were merged into `master` branch, it will automatically trigger [github-pages-action](https://github.com/marketplace/actions/github-pages-action) and after a few minutes it will be available.


## License

[MIT License](https://thulioph.mit-license.org/) © Thulio Philipe