using Interfaces.Enums;
using System;

namespace Interfaces.Services.Factories
{
    static class PaymentServiceFactory
    {
        public static IPaymentService GetPaymentService(PaymentService payment)
        {
            switch (payment)
            {
                case PaymentService.PayPal:
                    return new PayPalPaymentService();
                default:
                    throw new ArgumentException("Error: Invalid payment service type!");
            }
        }
    }
}
