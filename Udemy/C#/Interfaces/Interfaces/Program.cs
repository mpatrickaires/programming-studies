using Interfaces.ExemploAula.ExemploIComparable.Entities;
using System;
using System.IO;
using System.Collections.Generic;
using System.Globalization;

namespace Interfaces
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = @"E:\Programacao\Udemy\C#\Interfaces\Interfaces\ExemploAula\" + 
                          @"ExemploIComparable\in.txt";

            List<Employee> employees = new List<Employee>();
            using(StreamReader streamReader = File.OpenText(path))
            {
                while (!streamReader.EndOfStream)
                {
                    employees.Add(new Employee(streamReader.ReadLine()));
                }
            }

            employees.Sort();
            foreach (Employee employee in employees)
            {
                Console.WriteLine(employee);
            }
        }
    }
}
