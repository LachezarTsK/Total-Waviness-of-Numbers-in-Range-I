
package main

const MIN_WAVY_VALUE = 101

func totalWaviness(lowerLimit int, upperLimit int) int {
    var totalWaviness = 0
    if upperLimit < MIN_WAVY_VALUE {
        return totalWaviness
    }

    lowerLimit = max(lowerLimit, MIN_WAVY_VALUE)
    for value := lowerLimit; value <= upperLimit; value++ {
        totalWaviness += findWavinessOfValue(value)
    }
    return totalWaviness
}

func isWavy(first int, second int, third int) bool {
    return (first < second && third < second) || (first > second && third > second)
}

func findWavinessOfValue(value int) int {
    waviness := 0

    thirdDigit := value % 10
    value /= 10
    secondDigit := value % 10
    value /= 10

    for value > 0 {
        firstDigit := value % 10
        if isWavy(firstDigit, secondDigit, thirdDigit) {
            waviness++
        }

        thirdDigit = secondDigit
        secondDigit = firstDigit
        value /= 10
    }
    return waviness
}
