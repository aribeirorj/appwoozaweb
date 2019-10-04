# PROJECT WOOZA MOBILE

## Description

This app was developed following requirements for the document bellow.

https://github.com/marcosafmartins92/provawoozav/blob/master/README.md

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate VS CODE plugin for your Editor (not mandatory).

- Prettier
- vscode-styled-components
- vscode icons
- EsLint
- EditorConfig VS Code

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.9.1

    $ npm --version
    v6.10.3

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/aribeirorj/appwoozaweb.git
    $ cd PROJECT
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.
