// 3) PANGRAM SENTANCE

function isPangram(str) {
    let regex = /([a-z])(?!.*\1)/g;
    return (str.match(regex) || []).length === 26 
};

console.time('isPangram1 timer');
console.log(isPangram('The quick brown fox jumps over the lazy dog.')); //true
console.timeEnd('isPangram1 timer'); //isPangram1 timer: 7.594ms

// console.log(isPangram('I love to code!')); //false
// console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); //true

// ANOTHER WAY TO WRITE IT

function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let regex = /\s/g;
    let lowercase = str.toLowerCase().replace(regex, '');

    for (let i = 0; i < alphabet.length; i++) {
        if(lowercase.indexOf(alphabet[i]) === -1) {
            return false;
        };
    };
    return true;
};
console.time('isPangram2 timer');
isPangram('The quick brown fox jumps over the lazy dog.'); //true
console.timeEnd('isPangram2 timer'); //isPangram2 timer: 0.019ms

// isPangram('I love to code!'); //false
// isPangram('abcdefghijklmnopqrstuvwxyz'); //true

// ADD TO ZERO

function addToZero(numArr) {
    if (numArr.length < 2) {
        return false;
    };
    for(let i = 0; i < numArr.length; i++) { // use this loop to have 'i' represent the current number we are evaluating
        for(let j = i + 1; j < numArr.length; j++) { // use this loop to evaluate only the numbers that come after our numArr[i] element
            console.log('i =' + i,  'j =' + j)

            if(numArr[i] + numArr[j] === 0){
                return true;
            };
        };
    };
    return false;
};

addToZero([1, 2, 3, -2]);

// O(n log n)