using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            RegistraOcorrencia registro = new RegistraOcorrencia(new RegistraNoConsole());
            registro.RegistraInfo("Hello, World!");
        }
    }
}
