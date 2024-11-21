const fibonacci = function(num) {
    num = parseInt(num);
    if (typeof num === !'number' || num < 0) {
        return 'OOPS';
    }
    let count = 0;
    const sequence = [0, 1]
    let i = 2;

    while (count <= num) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
        i++
        count++;
    }
    // console.log(sequence[num - 1])
    // console.log(num);
    // console.log(count);
    return sequence[num];
};


// Do not edit below this line
module.exports = fibonacci;
