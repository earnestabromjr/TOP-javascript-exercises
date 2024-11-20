const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedWord = word
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');
    const newWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === newWord;
};
// Do not edit below this line
module.exports = palindromes;
