const square = require('./5-square');
class Square extends square {
    constructor(size) {
        // Call the constructor of the Square class using super()
        super(size);
    }

    charPrint(c) {
       const char = c || 'x';

        // Print the square using the specified character
        for (let i = 0; i < this.size; i++) {
            console.log(char.repeat(this.size));
        };
    };
};
module.exports= square;