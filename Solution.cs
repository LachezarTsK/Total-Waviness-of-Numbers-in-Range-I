
using System;

public class Solution
{
    private static readonly int MIN_WAVY_VALUE = 101;

    public int TotalWaviness(int lowerLimit, int upperLimit)
    {
        int totalWaviness = 0;
        if (upperLimit < MIN_WAVY_VALUE)
        {
            return totalWaviness;
        }

        lowerLimit = Math.Max(lowerLimit, MIN_WAVY_VALUE);
        for (int value = lowerLimit; value <= upperLimit; ++value)
        {
            totalWaviness += FindWavinessOfValue(value);
        }
        return totalWaviness;
    }

    private bool IsWavy(int first, int second, int third)
    {
        return (first < second && third < second) || (first > second && third > second);
    }

    private int FindWavinessOfValue(int value)
    {
        int waviness = 0;

        int thirdDigit = value % 10;
        value /= 10;
        int secondDigit = value % 10;
        value /= 10;

        while (value > 0)
        {
            int firstDigit = value % 10;
            if (IsWavy(firstDigit, secondDigit, thirdDigit))
            {
                ++waviness;
            }

            thirdDigit = secondDigit;
            secondDigit = firstDigit;
            value /= 10;
        }
        return waviness;
    }
}
