using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class RegistraNoConsole : IRegistro
    {
        public void RegistraInfo(string mensagem)
        {
            Console.WriteLine($"{mensagem} - {DateTime.Now}");
        }
    }
}
