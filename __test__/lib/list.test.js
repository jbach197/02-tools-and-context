'use strict';

const List = require('../../lib/list.js');

describe('List', () => {

  it('constructor() initializes with length of 0',() => {
    let list = new List();
    expect(list.length).toBe(0);
  });

  it('push() increments length by 1',() => {
    let list = new List();
    list.push('foo');
    expect(list.length).toBe(1);
  });

  it('push() inserts items into the list',() => {
    let list = new List();
    list.push('foo');
    list.push('bar');
    list.push('baz');
    expect(list[0]).toBe('foo');
    expect(list[1]).toBe('bar');
    expect(list[2]).toBe('baz');
  });

  // it("pop() decreses length by 1",() => {
  //     let list = new List();
  //     list.pop('foo');
  //     expect(list.length).toBe(-1);
  // });

  it('map() iterates over the list and returns new array',() => {
    let list = new List();
    list.push('foo');
    list.push('bar');
    list.push('baz');

    let newList = list.map( (val, i) =>`${i} - ${val}`);
  });
});
