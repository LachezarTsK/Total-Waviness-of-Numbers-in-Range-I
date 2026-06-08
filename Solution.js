
/**
 * @param {number} lowerLimit
 * @param {number} upperLimit
 * @return {number}
 */
var totalWaviness = function (lowerLimit, upperLimit) {
    const MIN_WAVY_VALUE = 101;
    let totalWaviness = 0;

    if (upperLimit < MIN_WAVY_VALUE) {
        return totalWaviness;
    }

    lowerLimit = Math.max(lowerLimit, MIN_WAVY_VALUE);
    for (let value = lowerLimit; value <= upperLimit; ++value) {
        totalWaviness += findWavinessOfValue(value);
    }
    return totalWaviness;
};

/**
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @return {boolean}
 */
function isWavy(first, second, third) {
    return (first < second && third < second) || (first > second && third > second);
}

/**
 * @param {number} value
 * @return {number}
 */
function findWavinessOfValue(value) {
    let waviness = 0;

    let thirdDigit = value % 10;
    value = Math.floor(value / 10);
    let secondDigit = value % 10;
    value = Math.floor(value / 10);

    while (value > 0) {
        let firstDigit = value % 10;
        if (isWavy(firstDigit, secondDigit, thirdDigit)) {
            ++waviness;
        }

        thirdDigit = secondDigit;
        secondDigit = firstDigit;
        value = Math.floor(value / 10);
    }
    return waviness;
}
