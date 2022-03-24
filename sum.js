module.exports = function () {

    // convert arguments object to an array
    let args = Array.prototype.slice.call(arguments);

    // throw error if arguments contain non finite number values
    if (!args.every(Number.isFinite)) {
        throw new TypeError("sum() expects only numbers.")
    }

    // return the sum of the arguments
    return args.reduce(function (a, b) {
        return a + b
    }, 0)

}