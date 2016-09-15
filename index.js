// @flow
'use strict';
const path = require('path');

function sorter(a, b) /*: number */ {
  let l = Math.max(a.length, b.length);
  for (let i = 0; i < l; i += 1) {
    if (!(i in a)) return -1;
    if (!(i in b)) return +1;
    if (a[i].toUpperCase() > b[i].toUpperCase()) return +1;
    if (a[i].toUpperCase() < b[i].toUpperCase()) return -1;
    if (a.length < b.length) return -1;
    if (a.length > b.length) return +1;
  }
  if (a.length < b.length) return -1;
  if (a.length > b.length) return +1;
  return 0;
}

function pathsort(paths /*: Array<string> */, sep /*: string */ = path.sep) /*: Array<string> */ {
  return paths
    .map(el => el.split(sep))
    .sort(sorter)
    .map(el => el.join(sep));
}

function standalone(sep /*: string */ = path.sep) {
  return (a /*: string */, b /*: string */) => {
    return sorter(a.split(sep), b.split(sep));
  };
}

module.exports = pathsort;
module.exports.standalone = standalone;
