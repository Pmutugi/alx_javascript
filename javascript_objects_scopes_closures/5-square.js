const Rectangle = require('./4-rectangle');
class Square extends Rectangle {
    constructor(size) {
        super(this.width, this.height)
    };
};
module.exports = Rectangle;