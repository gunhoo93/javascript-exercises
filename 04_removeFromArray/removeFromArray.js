const removeFromArray = function (arr, ...values) {
    const result = [];
    arr.forEach(elem => {
        if (!values.find(value => elem === value)) {
            result.push(elem);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
