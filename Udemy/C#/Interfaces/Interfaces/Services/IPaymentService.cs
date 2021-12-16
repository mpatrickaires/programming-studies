using Interfaces.Entities;

namespace Interfaces.Services
{
    interface IPaymentService
    {
        // Fee = Taxa
        public double PaymentFee(double amount);
        // Interest = Juros
        public double Interest(double amount, int installmentNumber);
    }
}
