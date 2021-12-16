using WorkingWithFiles.Exemplos;
using System;
using System.IO;
using System.Collections.Generic;
using System.Globalization;

namespace WorkingWithFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            string sourcePath = @"E:\Programacao\Udemy\C#\WorkingWithFiles\exercicioFixacao"
                              + @"\source.csv";

            string destinationPath = Path.GetDirectoryName(sourcePath) + @"\out";

            try
            {
                List<string> products = new List<string>();

                using(FileStream fileStream = new FileStream(sourcePath, FileMode.Open))
                using(StreamReader streamReader = new StreamReader(fileStream))
                {
                    while (!streamReader.EndOfStream)
                    {
                        string[] productLine = streamReader.ReadLine().Split(',');

                        string name = productLine[0];
                        double value = double.Parse(productLine[1], CultureInfo.InvariantCulture);
                        int quantity = int.Parse(productLine[2]);

                        double totalValue = value * quantity;

                        string product = $"{name},{totalValue.ToString("F2", CultureInfo.InvariantCulture)}";

                        products.Add(product);
                    }
                }

                Directory.CreateDirectory(destinationPath);

                destinationPath += @"\summary.csv";
                using(StreamWriter streamWriter = File.AppendText(destinationPath))
                {
                    foreach (string product in products)
                    {
                        streamWriter.WriteLine(product);
                    }
                }
            }
            catch (IOException e)
            {
                Console.WriteLine($"An error ocurred: {e.Message}");
            }
        }
    }
}
