
const List = require('../../lib/list.js');

describe('List', () => {

    it('constructor() initializes with length of 0', => {
        let list = new list();
        expect(list.length).toBe(0);
    });
});
