using Interfaces.Entities;
using Interfaces.Enums;
using Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Interfaces.ExemploAula
{
    class Exemplos
    {
        public static void Aula199_ExercicioFixacao_Interface()
        {
            Console.WriteLine("== ENTER CONTRACT DATA ==");
            Console.Write("Number: ");
            int number = int.Parse(Console.ReadLine());

            Console.Write("Date (dd/mm/yyyy): ");
            DateTime date = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy", CultureInfo.InvariantCulture);

            Console.Write("Contract value: ");
            double totalValue = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Contract contract = new Contract(number, date, totalValue);


            ContractService contractService = new ContractService(PaymentService.PayPal);

            Console.Write("Enter number of installments: ");
            int numberOfInstallments = int.Parse(Console.ReadLine());

            contractService.ProcessContract(contract, numberOfInstallments);

            Console.WriteLine(contract.InstallmentsToString());
        }
    }
}
