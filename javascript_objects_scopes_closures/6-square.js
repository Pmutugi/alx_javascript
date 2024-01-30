const square1 = require('./5-square')
class Square extends square1 {
    charPrint(c) {
       const char = c || 'X';

        // Print the square using the specified character
        for (let i = 0; i < this.height; i++) {
            console.log(char.repeat(this.width));
        };
    };
};
module.exports= Square;