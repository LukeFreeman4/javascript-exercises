const removeFromArray = function(myArray, ...num) {
    removeIndex = num - 1
    for (i in num) {
        myArray.splice(removeIndex, 1)
        return myArray
    }
    
}
;

// Do not edit below this line
module.exports = removeFromArray;
