'use strict';

class List {
    constructor() {
        this.length = 0;
    }

    push(item) {
        this[this.length++] = item;
    }

}

module.exports = List;