// return true if query is found left-to-right or up-to-down
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    
    if (doSearch(horizontalJoin, word)) return true;
    if (doSearch(verticalJoin, word)) return true;

    return false;
};

const doSearch = (joinType, word) => {
    let reverseWord = word.split("").reverse().join("");
    
    for (const l of joinType) {
        if (l.includes(word)) return true;
        if (l.includes(reverseWord)) return true;
    }

    return false;
};

// return transposed array
const transpose = letters => {
    const transposedArray = [];

    // error catch for empty word matrices
    if (letters.length === 0 ) {
        return letters;
    }

    // initialize the empty array with empty nested arrays
    for (let i = 0; i < letters[0].length; i++) {
        transposedArray.push([]);
    }

    // fill empty nested arrays with the transposed values
    for (let y = 0; y < letters.length; y++) {
        for (let x = 0; x < letters[y].length; x++) {
            transposedArray[x][y] = letters[y][x];
        }
    }

    return transposedArray;
};

module.exports = wordSearch;