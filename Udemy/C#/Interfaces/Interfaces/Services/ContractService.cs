using Interfaces.Entities;
using Interfaces.Enums;
using Interfaces.Services.Factories;
using System;

namespace Interfaces.Services
{
    class ContractService
    {
        IPaymentService _paymentService;

        public ContractService(PaymentService paymentService)
        {
            _paymentService = PaymentServiceFactory.GetPaymentService(paymentService);
        }

        public void ProcessContract(Contract contract, int months)
        {
            // Installment number = número da parcela
            for (int installmentNumber = 1; installmentNumber <= months; installmentNumber++)
            {
                double amount = contract.TotalValue / months;
                amount += _paymentService.Interest(amount, installmentNumber);
                amount += _paymentService.PaymentFee(amount);

                DateTime dueDate = contract.Date.AddMonths(installmentNumber);

                contract.Installments.Add(new Installment(dueDate, amount));
            }
        }
    }
}
