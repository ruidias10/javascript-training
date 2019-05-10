#### Thanks to
  - https://rocketseat.com.br/
  - https://eslint.org/docs/user-guide/getting-started


#### Install software:
  - NodeJS https://nodejs.org/en/


#### Prepare environment:
  - $ npm init
  - $ npm install @babel/cli
  - $ npm install @babel/core
  - $ npm install @babel/preset-env
  - $ npm install eslint


#### Add babel file and configure it to make JavaScript compatible with older browsers
  .babelrc
```
  {
      "presets": ["@babel/preset-env"]
  }
```


#### Inform babel which file should be monitored and where the bundle will be created. -w listening to changes
  package.json
```
    "scripts": {
      "dev": "babel ./src/main.js -o ./bundle.js -w",
    }
```


#### Run project
  - $ npm run dev (dev name > package.json > scripts.dev)


#### Eslint

##### Setup a configuration file
  - $ ls -la node_modules/.bin (find eslint bin)
  - $ ./node_modules/.bin/eslint --init
```
    ➜  JavaScript-ES6 git:(master) ✗ ./node_modules/.bin/eslint --init
    ? How would you like to configure ESLint? Answer questions about your style
    ? Which version of ECMAScript do you use? ES2015
    ? Are you using ES6 modules? Yes
    ? Do you use CommonJS? No
    ? Do you use JSX? No
    ? What style of indentation do you use? Tabs
    ? What quotes do you use for strings? Single
    ? What line endings do you use? Unix
    ? Do you require semicolons? Yes
    ? What format do you want your config file to be in? JavaScript
    Successfully created .eslintrc.js file
```

##### Run Eslint
  - $ ./node_modules/.bin/eslint src/main.js



https://station.rocketseat.com.br/courses/starter/e6100adf-08fb-4699-8567-b3690eb1cc21#0/7
