
import kotlin.math.max

class Solution {

    private companion object {
        const val MIN_WAVY_VALUE = 101
    }

    fun totalWaviness(lowerLimit: Int, upperLimit: Int): Int {
        var totalWaviness = 0
        if (upperLimit < MIN_WAVY_VALUE) {
            return totalWaviness
        }

        val lowerLimit = max(lowerLimit, MIN_WAVY_VALUE)
        for (value in lowerLimit..upperLimit) {
            totalWaviness += findWavinessOfValue(value)
        }
        return totalWaviness
    }

    private fun isWavy(first: Int, second: Int, third: Int): Boolean {
        return (first < second && third < second) || (first > second && third > second)
    }

    private fun findWavinessOfValue(value: Int): Int {
        var value = value
        var waviness = 0

        var thirdDigit = value % 10
        value /= 10
        var secondDigit = value % 10
        value /= 10

        while (value > 0) {
            val firstDigit = value % 10
            if (isWavy(firstDigit, secondDigit, thirdDigit)) {
                ++waviness
            }

            thirdDigit = secondDigit
            secondDigit = firstDigit
            value /= 10
        }
        return waviness
    }
}
