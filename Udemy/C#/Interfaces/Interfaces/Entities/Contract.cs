using System;
using System.Collections.Generic;
using System.Text;

namespace Interfaces.Entities
{
    class Contract
    {
        public int Number { get; private set; }
        public DateTime Date { get; private set; }
        public double TotalValue { get; set; }
        public List<Installment> Installments { get; set; } = new List<Installment>();

        public Contract(int number, DateTime date, double totalValue)
        {
            Number = number;
            Date = date;
            TotalValue = totalValue;
        }

        public string InstallmentsToString()
        {
            StringBuilder stringBuilder = new StringBuilder();

            foreach (Installment installment in Installments)
            {
                stringBuilder.Append($"{installment.DueDate.ToShortDateString()} - ");
                stringBuilder.AppendLine($"{installment.Amount:C}");
            }

            return stringBuilder.ToString();
        }
    }
}
