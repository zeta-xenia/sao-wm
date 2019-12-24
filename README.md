# sao-wm
[![Github Actions](https://github.com/KsRyY/sao-wm/workflows/CI/badge.svg)](https://github.com/KsRyY/sao-wm/commits/master) [![CircleCI](https://circleci.com/gh/KsRyY/sao-wm.svg?style=svg)](https://circleci.com/gh/KsRyY/sao-wm) [![Coverage Status](https://coveralls.io/repos/github/KsRyY/sao-wm/badge.svg?branch=master)](https://coveralls.io/github/KsRyY/sao-wm?branch=master)

*Scaffolding out a web module.*

## Features
* Lint your code with [XO](https://github.com/xojs/xo)
* Format your code with [Prettier](https://prettier.io)
* Compile ES2015+ code with [babel](https://github.com/babel/babel) (Configurable target through [browserslist](https://github.com/browserslist/browserslist))
* Bundle them with [gulp](https://github.com/gulpjs/gulp) and [rollup](https://github.com/rollup/rollup) (ESM or UMD)
* `.editorconfig` with space indention (size 2), LF EOL, auto trailing whitespace trimming and `insert_final_newline = true`
* Precommit hooks configured by [husky](http://npm.im/husky) to lint your code before committing

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
