'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
  }

  pop() {
    let item = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return item;
  }

  foreach(callback) {
    if ( typeof callback !== 'function' ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i);
    }
  }

  map(callback) {
    if ( typeof callback !== 'function' ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  filter(callback) {
    if ( typeof callback !== 'function' ) { return undefined; }
    let filtered = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this[i], i)) filtered.push(this[i]);
    }
    return filtered;
  }
}

module.exports = List;