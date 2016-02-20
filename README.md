# JS testing ( a guide I write for myself, as I learn )

Description:

I'm teaching myself and making my notes available for others. With this in mind I try to make sure that these notes are as general as possible.

I've come across a number of testing frameworks for JS, and have worked mostly with Jasmine in a ruby environment. This project contains my notes and explorations into other testing frameworks.

This repo contains a test app, which will be developed using TDD. The requirements for the app and cycles can be found in app.md

This readme is a primer, with a very basic setup in case anyone wants to replicate the steps in this project. The notes from working with the frameworks themselves are found here:

JASMINE.md
MOCHA.md
TAPE.md

#### in the beginning...

For all testing libraries, I have the following setup

- npm and node are installed
- I am create a directory `mkdir test-practice`
- I run `cd test-practice`
- I run `npm init`
- `npm test` is set to mocha
- for each test library I create a directory via `mkdir jasmine mocha tape`
- the rest of the directory is clean

### Jasmine

Jasmine is a standard js testing library, that provides basic assertion methods and is heavily based on Rspec, making it a perfect fit in a ruby environment. Jasmine requires a task runner and several other depencancies, or can be run in a browser

Jasmine cannot be run from the local project without the path (ie ./node_modules/jasmine/bin/jasmine.js)
Jasmine can be run if globally installed, but is better when it is locally installed
Jasmine requires initialization.

Basic config
```
npm install jasmine --save-dev
jasmine init
```

Basic test
```
// ./jasmine/test.js

describe('Some Unit', function() {
  it('has some property', function () {
    expect(unit.prop).toBe('something');
  });
});
```

Run with
```
jasmine jasmine/*.js
```
Continued in Jasmine Readme

### Mocha

Mocha is a standard Js testing library, that provides access to a wide variety of assertion methods and libraries. Mocha requires a task runner and several other depencancies, or can be run in a browser

Mocha cannot be run from the local project without the path (ie ./node_modules/mocha/bin/mocha.js)
Mocha can be run if globally installed, but is better when it is locally installed

Basic config
```
npm install mocha --save-dev
```

Basic test
```
// ./mocha/test.js

var assert = require('assert');

describe('Some Unit', function() {
  it('should have some property', function () {
    assert.equal(unit.prop, 'something');
  });
});

```

Run with (when npm test is bound to `./node_modules/mocha/bin/mocha.js` or `mocha`)
```
npm test mocha/*.js
```
Continued in Mocha Readme

### Tape

Tape is a light weight, standalone library that allows testing without any task runners. Doesnt require much

Basic config

```
npm install tape --save-dev
```

Basic test

```
// ./tape/test.js

var test = require('tape');
var unit = require('./unit');

test('Some unit', function(t) {
  t.equal(unit.property, 'something');
  t.end
});
```

Run with
```
node tape/*.js
```

Continued in Tape Readme

