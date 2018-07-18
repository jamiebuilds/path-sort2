// @flow
'use strict';
const test = require('ava');
const fileSort = require('./');

const FILES = [
  'a/world',
  'a/lib/index.js',
  'b/package.json',
  'b/lib/3/index.js',
  'b/lib/2/README.js',
  'a/hello',
  'b/lib/2/index.js',
  'a/lib/README.md',
  'b/lib/3/README.js',
  'c',
];

const EXPECTED = [
  'a/hello',
  'a/lib/index.js',
  'a/lib/README.md',
  'a/world',
  'b/lib/2/index.js',
  'b/lib/2/README.js',
  'b/lib/3/index.js',
  'b/lib/3/README.js',
  'b/package.json',
  'c',
];

test('fileSort()', t => {
  t.deepEqual(fileSort(FILES), EXPECTED);
});

test('fileSort.standalone()', t => {
  t.deepEqual(FILES.sort(fileSort.standalone()), EXPECTED);
});
