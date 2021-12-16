using Course.Entities.Enums;
using System;
using System.Collections.Generic;
namespace Course.Entities
{
    class Worker
    {
        public string Name { get; set; }
        public WorkerLevel Level { get; set; }
        public double BaseSalary { get; set; }
        public Department Department { get; set; }
        public List<HourContract> Contracts { get; set; } = new List<HourContract>();

        public Worker()
        {
        }

        public Worker(string name, WorkerLevel level, double baseSalary, Department department)
        {
            Name = name;
            Level = level;
            BaseSalary = baseSalary;
            Department = department;
        }

        public void AddContract(HourContract contract)
        {
            Contracts.Add(contract);
        }

        public void RemoveContract(DateTime date)
        {
            HourContract removeContract = Contracts.Find(contract =>
                contract.Date.Equals(date));
            Contracts.Remove(removeContract);
        }

        public double Income(int year, int month)
        {
            double income = BaseSalary;

            foreach (HourContract contract in Contracts)
            {
                if (contract.Date.Year == year && contract.Date.Month == month)
                {
                    income += contract.TotalValue();
                }
            }

            return income;
        }

        public string ToString(int year, int month)
        {
            return $"Name: {Name}\n" +
                $"Department: {Department.Name}\n" +
                $"Income for {month}/{year}: {Income(year, month)}";
        }
    }
}
