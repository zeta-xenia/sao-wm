# sao-wm
[![Coverage Status](https://coveralls.io/repos/github/KsRyY/sao-wm/badge.svg?branch=master)](https://coveralls.io/github/KsRyY/sao-wm?branch=master)

*Scaffolding out a web module.*

## Features
* ESLint with [Airbnb](https://github.com/airbnb/javascript) rules
* Compile ES2015+ code with [babel](https://github.com/babel/babel) (Configurable target through [browserslist](https://github.com/browserslist/browserslist))
* Bundle them with [gulp](https://github.com/gulpjs/gulp) and [rollup](https://github.com/rollup/rollup) (ESM or UMD)
* `.editorconfig` with tab indention (size 4), LF EOL and `insert_final_newline = true`

## Usage

Install [SAO](https://github.com/saojs/sao) first:
``` bash
yarn global add sao
# or with npm
npm i -g sao
```

**From git**
``` bash
sao KsRyY/sao-wm
```

**From npm**
``` bash
sao wm
```

## Why the coverage is not 100%?

See line 62,63,64 of the [source code](saofile.js).
Currently there is no way to test these three lines with test suites provided by SAO.
