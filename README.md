# JS testing
( a guide I write for myself, as I learn )

Description:

I'm teaching myself and making my notes available for others. With this in mind I try to make sure that these notes are as general as possible.

I've come across a number of testing frameworks for JS, and have worked mostly with Jasmine in a ruby environment. This project contains my notes and explorations into other testing frameworks.

This repo contains a test app, which will be developed using TDD. The requirements for the app and cycles can be found in app.md

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

#### Observations
- does not give a detailed view on which tests run, and does not have a default verbose mode. Which is quite unfortunate, as I would like to be able to see what tests exist in the suite when I run them
- cannot be run from the local project without the path (ie ./node_modules/jasmine/bin/jasmine.js)
- can be run if globally installed, but is better when it is locally installed
- requires initialization.
- Gives accurate error message when comparing two objects: `Expected Point({ x: 50, y: 50 }) to be Object({ x: 50, y: 50 })`

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


### Mocha

Mocha is a standard Js testing library, that provides access to a wide variety of assertion methods and libraries. Mocha requires a task runner and several other depencancies, or can be run in a browser

##### Observations
- cannot be run from the local project without the path (ie ./node_modules/mocha/bin/mocha.js)
- can be run if globally installed, but is better when it is locally installed
- does not give a clear error when two classes do not equal. example: `AssertionError: Point { x: 50, y: 50 } == { x: 50, y: 50 }`

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

### Tape

Tape is a light weight, standalone library that allows testing without any task runners.

#### Observation
- Doesnt require much
- does not group tests in blocks
- does not give clear error when two objectes are compared. ie)
```
expected: |- { x: 50, y: 50 }
actual: |- { x: 50, y: 50 }
```

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

