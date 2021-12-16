using System;

namespace Primeiro
{
    class Program
    {
        static void Main(string[] args)
        {
            int soma = 0;

            Console.Write("Quantos números inteiros você vai digitar? ");
            int quantidade = int.Parse(Console.ReadLine());

            for (int i = 1; i <= quantidade; i++)
            {
                Console.Write($"Valor #{i}: ");
                soma += int.Parse(Console.ReadLine());
            }

            Console.WriteLine($"Soma = {soma}");
        }
    }
}
