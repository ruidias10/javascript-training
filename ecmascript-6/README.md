### Thanks to https://rocketseat.com.br/

### Install software:
  - NodeJS https://nodejs.org/en/

### Prepare environment:
  - $ npm init
  - $ npm install @babel/cli
  - $ npm install @babel/core
  - $ npm install @babel/preset-env

### Add babel file and configure it to make JavaScript compatible with older browsers
  .babelrc
```
  {
      "presets": ["@babel/preset-env"]
  }
```

### Inform babel which file should be monitored and where the bundle will be created. -w listening to changes
  package.json
```
    "scripts": {
      "dev": "babel ./src/main.js -o ./bundle.js -w",
    }
```

### Run project
  - $ npm run dev (this dev name > package.json > scripts.dev)
