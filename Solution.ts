
function totalWaviness(lowerLimit: number, upperLimit: number): number {
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

function isWavy(first: number, second: number, third: number): boolean {
    return (first < second && third < second) || (first > second && third > second);
}

function findWavinessOfValue(value: number): number {
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
