# path-sort2

Sort a list of file/directory paths, such that something like this:

## Example

```js
const pathSort = require('path-sort2');

let files = [
  'a/c',
  'a/a/a',
  'b/b',
  'b/a/2/a',
  'b/a/1/b',
  'a/b',
  'b/a/1/a',
  'a/a/b',
  'b/a/2/b',
  'c',
];

let sortedFiles = pathSort(files);
// [
//   'a/b',
//   'a/c',
//   'a/a/a',
//   'a/a/b',
//   'b/b',
//   'b/a/1/a',
//   'b/a/1/b',
//   'b/a/2/a',
//   'b/a/2/b',
//   'c',
// ]
```

## Install

```sh
npm install path-sort2
```

## Usage

```js
const pathSort = require('path-sort2');

pathSort(files); // sorted files
pathSort(files, '/'); // custom seperator (defaults to `path.sep`)

files.sort(pathSort.standalone()); // sorted files
files.sort(pathSort.standalone('/')); // custom seperator (defaults to `path.sep`)
```

> **Note:** Using `pathSort.standalone()` is a little bit slower, but is
> sometimes more convenient.
