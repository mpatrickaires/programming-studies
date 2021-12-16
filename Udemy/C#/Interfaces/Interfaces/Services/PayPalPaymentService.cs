namespace Interfaces.Services
{
    class PayPalPaymentService : IPaymentService
    {
        public double PaymentFee(double amount)
        {
            return amount * 0.02;
        }

        public double Interest(double amount, int installmentNumber)
        {
            return amount * (0.01 * installmentNumber);
        }
    }
}
