# Docusaurus-template

This repository contains template code for a team homepage containing web content, documentation pages, and a blog function. It is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Using the template

### Forking to your namespace

To set up your own site based on the template: 

* Fork the repository into your team's namespace.
* Change the repo name to something befitting - it needs to be something other than `docusaurus-template`, or the CI pipeline will not run:
    * Open the *Settings* > *General* page of the new repository
    * Change the value of *Naming, topics, avatar* > *Project name* to your chosen name and click *Save changes*
    * Change the value of *Advanced* > *Change path* to your chosen name and click *Change path*
* Update `docusaurus.config.js`:
    * Replace `{}`-placeholders with appropriate values for your use case
        * `title`
        * `url`
        * `projectName`
        * Relevant links inside the `links` list, especially `href` of the Slack and Gitlab links
        * Contact details in the `footer`
        * If you want users to be able to suggest changes: `editUrl` inside the `docs` section. Otherwise remove the property


## Building locally

### Build

To build the content:

```
make build
```

This builds HTML content as well as it creates the search index (more info see "Search index" section).

*Equivalent npm commands:*

```
$ npm ci
$ touch src/theme/SearchBar/search-data.js
$ npm build
$ node build-search-data.js
```

### Local Development

To start a local development server:

```
$ make build-run-dev
```

This command builds and indexes content and starts a local development server.

*Equivalent npm commands:*

```
$ npm ci
$ touch src/theme/SearchBar/search-data.js
$ npm build
$ node build-search-data.js
$ npm run dev
```

## Building with Docker

### Building the image

To build the application docker image, run:

```bash
$ docker build -t team-homepage .
```

### Running the application

To run a container from the build image, run:

```bash
$ docker run -p 8080:80 team-homepage
```

The site will be available at <http://localhost:8080>.

