
namespace Course
{
    class Calculator
    {
        public static double SumParams(params double[] numbers)
        {
            double sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
            }

            return sum;
        }

        public static void TripleRef(ref double value)
        {
            value *= 3;
        }

        public static void TripleOut(double origin, out double result)
        {
            result = origin * 3;
        }
    }
}
